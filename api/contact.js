import nodemailer from 'nodemailer'

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL']

function missingEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key])
  return missing.length ? missing : null
}

function validateBody(body) {
  if (!body || typeof body !== 'object') return 'Invalid body'
  const { name, email, subject, message } = body
  const nameStr = typeof name === 'string' ? name.trim() : ''
  const emailStr = typeof email === 'string' ? email.trim() : ''
  const subjectStr = typeof subject === 'string' ? subject.trim() : ''
  const messageStr = typeof message === 'string' ? message.trim() : ''
  if (!nameStr) return 'Name is required'
  if (!emailStr) return 'Email is required'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(emailStr)) return 'Invalid email'
  if (!messageStr) return 'Message is required'
  return {
    name: nameStr,
    email: emailStr,
    subject: subjectStr || 'Project Collaboration',
    message: messageStr,
  }
}

function buildEmailText({ name, email, subject, message }) {
  return [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Message: ${message}`,
  ].join('\n')
}

export default async function handler(req, res) {
  const origin = req.headers.origin || req.headers.referer || ''
  const allowOrigin = origin.startsWith('http://localhost') || origin.includes('vercel.app')
  if (allowOrigin) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const missing = missingEnv()
  if (missing) {
    console.error('Missing env:', missing.join(', '))
    return res.status(500).json({ error: 'Server configuration error' })
  }

  let body
  try {
    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    const raw = Buffer.concat(chunks).toString()
    body = raw ? JSON.parse(raw) : {}
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  const validated = validateBody(body)
  if (typeof validated === 'string') {
    return res.status(400).json({ error: validated })
  }

  const text = buildEmailText(validated)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: validated.email,
      subject: `[PCF] ${validated.subject}`,
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Send mail error:', err)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
