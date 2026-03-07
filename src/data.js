export const portfolio = {
  name: "Omar Sahri",
  title: "Automation Engineer",
  location: "Paris, France",
  tagline: "Robotics & Industrial Automation",
  description: "Specializing in industrial project management, industrial robotics, and ROS/ROS2 development, with a focus on warehouse automation. Passionate about building intelligent systems that drive efficiency and innovation.",
  email: "or.sahri@gmail.com",
  phone: "+33 7 59 72 11 31",
  linkedin: "https://www.linkedin.com/in/omarsahri",
  github: "https://github.com/omarsahri",

  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "5+", label: "Automation Deployments" },
    { value: "1", label: "AMR Deployed" },
    { value: "$100K+", label: "Annual Savings" },
    { value: "10+ sites", label: "Lean Initiatives" },
  ],

  whoIAm: {
    bio: "Automation Engineer with hands-on experience in industrial project management, industrial robotics, and ROS/ROS2 development, with applications in motion planning, navigation, and perception pipelines. Proficient in C++ and Python. Working knowledge of PLCs and experience supporting robot integration and system testing in warehouse and production environments. Certified Green Belt with experience contributing to lean, cross-functional teams, focusing on system deployment, root-cause troubleshooting, and continuous improvement in industrial environments.",
    expertise: "Industrial project management, industrial robotics, and ROS/ROS2-based system development, with hands-on experience in industrial automation integration from conception to deployment, including industrial robot integration (FANUC, DOOSAN) and warehouse automation solutions delivering measurable business impact.",
    expertiseTitle: "ROS/ROS2 Expert",
  },

  whatIDo: "I specialize in motion planning, navigation systems, perception pipelines, PLC programming, and process optimization. I bridge the gap between cutting-edge robotics research and practical industrial applications.",

  experience: [
    {
      role: "Automation Engineer",
      company: "Marmon Holdings Inc. - Marmon Metals and Services",
      period: "Jan 2025 - Jan 2026",
      location: "Atlanta, United States",
      current: false,
      bullets: [
        
        "Validated RFID robot performance, achieving 99% inventory data collection accuracy across 10,000 SKUs using ROS and Gazebo, significantly reducing discrepancies and enhancing operational reliability.",
        "Supported field testing and deployment of robotic systems at operational sites; collaborated with stakeholders to ensure performance objectives were met.",
        "Developing a warehouse process simulation using FlexSim to optimize workflows, enhance efficiency, and identify operational improvements, targeting annual savings of $100,000.",
        "Gained exposure to PLC programming (Allen-Bradley) and HMI interfaces during hardware integration and system testing phases.",
      ],
    },
    {
      role: "Automation Engineer",
      company: "Marmon Holdings Inc. - Marmon/Keystone",
      period: "Sep 2023 - Dec 2024",
      location: "Atlanta, United States",
      bullets: [
        "Achieved Lean Six Sigma Yellow Belt Certification.",
        "Optimized operational workflows by developing interactive Power BI dashboards for real-time analytics, accelerating management decision-making by 25% and boosting overall efficiency across three warehouse facilities.",
        "Developed and debugged Linux-based robotics software, applying structured object-oriented design, basic multithreading, and systematic debugging to support continuous operation of automated systems.",
        "Gained practical experience in FANUC and DOOSAN robot programming through EWI-certified industrial robotics training, expanding hardware integration capabilities.",
      ],
    },
    {
      role: "Automation Engineer - Co-op",
      company: "Marmon Holdings Inc.",
      period: "Jan 2023 - Aug 2023",
      location: "Chicago, United States",
      bullets: [
        "Supported performance improvement initiatives by analyzing material handling processes, contributing to actions that reduced downtime by 20% and increased throughput by 30%.",
        "Collaborated with cross-functional teams to integrate new automation solutions, improving overall system efficiency.",
        "Communicated with and led discussions across cross-functional teams and stakeholders throughout project execution.",
        "Maintained project scope, budget, quality, and schedule throughout the full project lifecycle.",
        "Implemented solutions designed to deliver intended capabilities at the lowest project lifecycle cost.",
      ],
    },
  ],

  education: [
    {
      degreeType: "MASTER'S DEGREE",
      programName: "Robotics and Intelligent Autonomous Systems",
      institution: "University of Cincinnati",
      location: "Cincinnati, Ohio, United States",
      countryCode: "US",
      specializations: ["ROS/ROS2","Artificial Intelligence","Machine Learning", "Python/C++"],
    },
    {
      degreeType: "BACHELOR'S & MASTER'S DEGREE",
      programName: "Electrical and Mechanical Engineering",
      institution: "Université de Lorraine, ENSEM",
      location: "Nancy, France",
      countryCode: "FR",
      specializations: ["Motor Control","Drives","PID Control","Python/C++"],
    },
  ],

  skills: {
    programming: ["Python", "C++"],
    robotics: ["ROS/ROS2", "Gazebo", "Nav2", "Motion Planning", "SLAM & Localization"],
    industrial: ["PLCs (Allen-Bradley)", "HMI Systems", "FANUC Programming", "DOOSAN Programming"],
    tools: ["FlexSim", "Power BI", "RFID Technology", "Linux"],
  },

  projects: [
    {
      id: "rfid-inventory",
      title: "RFID-Based Automated Inventory System",
      category: "Warehouse Automation",
      description: "Designed and implemented an automated inventory data collection process using RFID technology to improve process reliability and data accuracy.",
      period: "Jan 2024 - Dec 2024",
      location: "Paris, France",
      caseStudy: {
        challenge: "The warehouse faced manual inventory counts that were time-consuming, error-prone, and led to stock discrepancies affecting order fulfillment and operational decisions.",
        solution: "Designed and deployed an RFID-based automated inventory data collection system integrated with existing WMS. Developed data pipelines and validation logic to ensure high accuracy and real-time visibility across 10,000+ SKUs.",
        technologies: ["RFID", "ROS", "Gazebo", "Python", "Linux", "Power BI"],
        features: [
          "Automated RFID read points along conveyor and storage zones",
          "Integration with warehouse management system (WMS)",
          "Real-time dashboards for inventory visibility",
          "Data validation and exception handling",
          "Reporting for cycle counts and variance analysis",
        ],
        results: [
          "Achieved 99% inventory data collection accuracy",
          "Reduced manual count time by 70%",
          "Faster cycle counts enabling same-day reconciliation",
          "Improved order fulfillment reliability",
        ],
      },
    },
    {
      id: "warehouse-simulation",
      title: "Warehouse Process Optimization Simulation",
      category: "Process Simulation",
      description: "Developing a comprehensive warehouse process simulation using FlexSim to optimize workflows, enhance efficiency, and identify operational improvements.",
      period: "Sep 2024 - Present",
      location: "Paris, France",
      caseStudy: {
        challenge: "The facility needed to validate layout changes and process improvements before physical implementation, and to quantify potential savings and throughput gains.",
        solution: "Building a detailed discrete-event simulation model in FlexSim that mirrors current warehouse layout, equipment, and workflows. Running scenarios to test different configurations and identify bottlenecks and improvement opportunities.",
        technologies: ["FlexSim", "Discrete Event Simulation", "Excel", "Process Mapping"],
        features: [
          "Model of current warehouse layout and material flow",
          "Conveyor, storage, and labor resource modeling",
          "Scenario comparison for layout and process changes",
          "Throughput and cycle time analysis",
          "Documentation of assumptions and results",
        ],
        results: [
          "Targeting $100,000+ annual savings from identified improvements",
          "Evidence-based recommendations for management",
          "Reduced risk of costly physical trial-and-error",
          "Reusable model for future planning",
        ],
      },
    },
    {
      id: "industrial-robots",
      title: "Industrial Robot Integration & Programming",
      category: "Industrial Robotics",
      description: "Gained practical experience in FANUC and DOOSAN robot programming through EWI-certified industrial robotics training, expanding hardware integration capabilities.",
      period: "Sep 2023 - Dec 2024",
      location: "Paris, France",
      caseStudy: {
        challenge: "The facility needed to integrate industrial robots into existing production lines while maintaining productivity and ensuring worker safety. Legacy systems required careful integration with modern robotic platforms.",
        solution: "Completed EWI-certified training in FANUC and DOOSAN robot programming. Developed custom robot programs for material handling and assembly operations. Integrated robots with PLCs and HMI systems for seamless operation. Implemented safety protocols and conducted thorough testing before deployment.",
        technologies: ["FANUC", "DOOSAN", "PLC Programming", "HMI", "C++", "Robot Operating System"],
        features: [
          "Custom robot programming for specific tasks",
          "PLC and HMI integration",
          "Safety system implementation",
          "Maintenance protocols and documentation",
          "Operator training programs",
        ],
        results: [
          "Successfully integrated 3 industrial robots",
          "Increased production throughput by 30%",
          "Reduced manual handling injuries by 40%",
          "Achieved 99.5% uptime for robotic systems",
        ],
      },
    },
  ],

  certifications: [
    { name: "Certified Yellow Belt", org: "Gemba Academy", year: "2024", desc: "Lean manufacturing and process improvement certification" },
    { name: "Industrial Robotics Training", org: "EWI (Edison Welding Institute)", year: "2023", desc: "FANUC and DOOSAN robot programming certification" },
    { name: "ROS Developer", org: "The Construct", year: "2024", desc: "Advanced ROS/ROS2 development and system integration" },
  ],

  additionalExpertise: [
    { title: "Lean Six Sigma Methodology", desc: "Certified yellow Belt with hands-on experience in process improvement and waste reduction" },
    { title: "Cross-Functional Collaboration", desc: "Experience working with stakeholders across engineering, operations, and management teams" },
    { title: "System Integration", desc: "Expertise in integrating robotic systems with PLCs, HMIs, and warehouse management systems" },
    { title: "Problem Solving", desc: "Root-cause analysis and systematic troubleshooting in complex industrial environments" },
  ],

  news: [
    { type: "Training", date: "January 14, 2025", comments: 2, title: "Completed Advanced ROS2 Navigation Workshop", excerpt: "Just completed an intensive workshop on advanced ROS2 navigation techniques. Learned about new Nav2 features and optimization strategies.", image: "", fullArticle: "Last week I wrapped up an intensive three-day workshop on advanced ROS2 navigation. We covered the latest Nav2 stack features including the new behavior trees, improved recovery behaviors, and tuning for warehouse-style environments. The hands-on sessions with costmap configuration and parameter optimization were especially valuable. I'm looking forward to applying these techniques to our next autonomous mobile robot deployment. Big thanks to the instructors and the rest of the cohort for the great discussions.", commentsList: [{ author: "David Kim", date: "Jan 15, 2025", text: "Sounds like a solid workshop. Would you recommend it for someone with basic Nav2 experience?" }, { author: "Lisa Park", date: "Jan 16, 2025", text: "The behavior tree changes are a game-changer. Glad you got to dive in!" }] },
    { type: "Project Update", date: "January 7, 2025", comments: 3, title: "New Project: Collaborative Robot Integration", excerpt: "Excited to announce that I'm starting a new collaborative robot (cobot) integration project at our manufacturing facility.", image: "", fullArticle: "I'm excited to share that I've kicked off a new collaborative robot integration project at our manufacturing site. We're evaluating cobots for assembly and quality inspection stations where close human-robot interaction is required. The project will include risk assessments, safety system design, and programming for pick-and-place and vision-based inspection. We're starting with a pilot cell and will scale based on results. I'll post updates as we move through the design and commissioning phases.", commentsList: [{ author: "Tom Rivera", date: "Jan 8, 2025", text: "Which cobot platform are you leaning toward?" }, { author: "Anna Chen", date: "Jan 9, 2025", text: "Looking forward to hearing how the pilot goes." }, { author: "Chris Walsh", date: "Jan 10, 2025", text: "Safety integration is key—good call making that a focus from day one." }] },
    { type: "Speaking", date: "December 19, 2024", comments: 2, title: "Speaking at Atlanta Robotics Meetup", excerpt: "Had the honor of presenting at the Atlanta Robotics Meetup about warehouse automation and RFID systems.", image: "", fullArticle: "Yesterday I had the privilege of presenting our RFID-based inventory system project at the Atlanta Robotics Meetup. It was wonderful to share our journey, challenges, and lessons learned with the local robotics community. The Q&A session was particularly engaging, with great questions about SLAM integration and perception pipelines. Thank you to everyone who attended!", commentsList: [{ author: "Emily Wilson", date: "Dec 20, 2024", text: "Great presentation Omar! Your insights on SLAM were really valuable." }, { author: "Michael Brown", date: "Dec 21, 2024", text: "Missed the meetup but heard it was excellent. Any chance you'll share the slides?" }] },
  ],

  testimonials: [
    {
      quote: "Omar approaches automation with a practical mindset, focusing on solving real problems rather than just building technically interesting solutions.",
      author: "Will Smylie",
      role: "Vice President Operations & Continuous Improvement",
      company: "Marmon Metals and Services",
      image: "/testimonials/will-smylie.png",
    },
    {
      quote: "Omar is an exceptional industrial and robotics engineer who consistently demonstrated a rare combination of deep technical expertise, operational awareness, and innovative thinking.",
      author: "David Guzman Jr",
      role: "Supply Chain Director",
      company: "Group Director of Innovation and Data Intelligence",
      image: "/testimonials/david-guzman.png",
    },
  ],

  contactBlurb: "I'm always open to discussing new opportunities, collaborations, or just connecting with fellow robotics and automation enthusiasts. Feel free to reach out!",
};
