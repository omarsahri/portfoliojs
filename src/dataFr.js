export const portfolioFr = {
  name: "Omar Sahri",
  title: "Ingénieur en automatisation",
  location: "Paris, France",
  tagline: "Robotique & automatisation industrielle",
  description: "Spécialisé en gestion de projets industriels, robotique industrielle et développement ROS/ROS2, avec un focus sur l'automatisation des entrepôts. Passionné par la conception de systèmes intelligents qui améliorent l'efficacité et l'innovation.",
  email: "or.sahri@gmail.com",
  phone: "+33 7 59 72 11 31",
  linkedin: "https://www.linkedin.com/in/omarsahri",
  github: "https://github.com/omarsahri",

  stats: [
    { value: "3+", label: "Années d'expérience" },
    { value: "5+", label: "Déploiements d'automatisation" },
    { value: "1", label: "AMR déployé" },
    { value: "100 k€+", label: "Économies annuelles" },
    { value: "10+ sites", label: "Initiatives lean" },
  ],

  whoIAm: {
    bio: "Ingénieur en automatisation avec une expérience terrain en gestion de projets industriels, robotique industrielle et développement ROS/ROS2, avec des applications en planification de mouvement, navigation et pipelines de perception. Compétences en C++ et Python. Connaissances en programmation de PLC et expérience du support à l'intégration robotique et aux tests système en environnements entrepôt et production. Ceinture verte avec expérience au sein d'équipes lean et pluridisciplinaires, axée sur le déploiement de systèmes, le diagnostic et l'amélioration continue en milieu industriel.",
    expertise: "Gestion de projets industriels, robotique industrielle et développement de systèmes basés sur ROS/ROS2, avec une expérience concrète de l'intégration de l'automatisation industrielle de la conception au déploiement, notamment l'intégration de robots industriels (FANUC, DOOSAN) et des solutions d'automatisation d'entrepôt à impact business mesurable.",
    expertiseTitle: "Expert ROS/ROS2",
  },

  whatIDo: "Je suis spécialisé en planification de mouvement, systèmes de navigation, pipelines de perception, programmation de PLC et optimisation des processus. Je fais le lien entre la recherche en robotique de pointe et les applications industrielles concrètes.",

  experience: [
    {
      role: "Ingénieur en automatisation",
      company: "Marmon Holdings Inc. - Marmon Metals and Services",
      period: "Janv. 2025 - Janv. 2026",
      location: "Atlanta, États-Unis",
      current: false,
      bullets: [
        "Validation des performances du robot RFID : 99 % de précision de collecte des données d'inventaire sur 10 000 références avec ROS et Gazebo, réduction des écarts et amélioration de la fiabilité opérationnelle.",
        "Support aux tests terrain et au déploiement de systèmes robotiques sur sites ; collaboration avec les parties prenantes pour atteindre les objectifs de performance.",
        "Développement d'une simulation de processus d'entrepôt avec FlexSim pour optimiser les flux, l'efficacité et identifier des améliorations, visant des économies annuelles de 100 000 $.",
        "Exposition à la programmation de PLC (Allen-Bradley) et aux interfaces HMI lors des phases d'intégration matérielle et de tests système.",
      ],
    },
    {
      role: "Ingénieur en automatisation",
      company: "Marmon Holdings Inc. - Marmon/Keystone",
      period: "Sept. 2023 - Déc. 2024",
      location: "Atlanta, États-Unis",
      bullets: [
        "Certification Lean Six Sigma Yellow Belt.",
        "Optimisation des flux opérationnels via des tableaux de bord Power BI pour l'analytique en temps réel, accélération des décisions de 25 % et gains d'efficacité sur trois sites.",
        "Développement et débogage de logiciels robotiques sous Linux (conception orientée objet, multithreading, débogage systématique) pour un fonctionnement continu.",
        "Expérience pratique en programmation de robots FANUC et DOOSAN (formation EWI), renforcement des compétences en intégration matérielle.",
      ],
    },
    {
      role: "Ingénieur en automatisation - Co-op",
      company: "Marmon Holdings Inc.",
      period: "Janv. 2023 - Août 2023",
      location: "Chicago, États-Unis",
      bullets: [
        "Support aux initiatives d'amélioration des performances par l'analyse des processus de manutention ; contribution à des actions ayant réduit les arrêts de 20 % et augmenté le débit de 30 %.",
        "Collaboration avec des équipes pluridisciplinaires pour intégrer de nouvelles solutions d'automatisation.",
        "Animation d'échanges avec les équipes et parties prenantes tout au long des projets.",
        "Respect du périmètre, du budget, de la qualité et du planning sur tout le cycle de vie des projets.",
        "Mise en œuvre de solutions visant les capacités attendues au coût cycle de vie le plus bas.",
      ],
    },
  ],

  education: [
    {
      degreeType: "MASTER",
      programName: "Robotique et systèmes autonomes intelligents",
      institution: "University of Cincinnati",
      location: "Cincinnati, Ohio, États-Unis",
      countryCode: "US",
      specializations: ["ROS/ROS2", "Intelligence artificielle", "Machine Learning", "Python/C++"],
    },
    {
      degreeType: "LICENCE & MASTER",
      programName: "Génie électrique et mécanique",
      institution: "Université de Lorraine, ENSEM",
      location: "Nancy, France",
      countryCode: "FR",
      specializations: ["Commande de moteurs", "Variateurs", "Régulation PID", "Python/C++"],
    },
  ],

  skills: {
    programming: ["Python", "C++"],
    robotics: ["ROS/ROS2", "Gazebo", "Nav2", "Planification de mouvement", "SLAM & localisation"],
    industrial: ["PLC (Allen-Bradley)", "Systèmes HMI", "Programmation FANUC", "Programmation DOOSAN"],
    tools: ["FlexSim", "Power BI", "Technologie RFID", "Linux"],
  },

  projects: [
    {
      id: "rfid-inventory",
      title: "Système d'inventaire automatisé par RFID",
      category: "Automatisation d'entrepôt",
      description: "Conception et mise en œuvre d'un processus automatisé de collecte de données d'inventaire par RFID pour améliorer la fiabilité et la précision.",
      period: "Janv. 2024 - Déc. 2024",
      location: "Paris, France",
      caseStudy: {
        challenge: "L'entrepôt dépendait de comptages manuels longs, sujets aux erreurs et sources d'écarts affectant la préparation des commandes et les décisions opérationnelles.",
        solution: "Conception et déploiement d'un système de collecte automatisée par RFID intégré au WMS. Mise en place de pipelines de données et de logique de validation pour une haute précision et une visibilité en temps réel sur plus de 10 000 références.",
        technologies: ["RFID", "ROS", "Gazebo", "Python", "Linux", "Power BI"],
        features: [
          "Points de lecture RFID le long des convoyeurs et zones de stockage",
          "Intégration au système de gestion d'entrepôt (WMS)",
          "Tableaux de bord temps réel pour la visibilité des stocks",
          "Validation des données et gestion des exceptions",
          "Rapports pour inventaires cycliques et analyse des écarts",
        ],
        results: [
          "99 % de précision de collecte des données d'inventaire",
          "Réduction de 70 % du temps de comptage manuel",
          "Comptages cycliques plus rapides et rapprochement le jour même",
          "Meilleure fiabilité de la préparation des commandes",
        ],
      },
    },
    {
      id: "warehouse-simulation",
      title: "Simulation d'optimisation des processus d'entrepôt",
      category: "Simulation de processus",
      description: "Développement d'une simulation de processus d'entrepôt avec FlexSim pour optimiser les flux, l'efficacité et identifier des améliorations opérationnelles.",
      period: "Sept. 2024 - En cours",
      location: "Paris, France",
      caseStudy: {
        challenge: "Le site devait valider des changements de layout et d'amélioration des processus avant mise en œuvre physique, et quantifier les gains potentiels.",
        solution: "Construction d'un modèle de simulation à événements discrets dans FlexSim reflétant le layout actuel, les équipements et les flux. Exécution de scénarios pour tester différentes configurations et identifier goulots d'étranglement et pistes d'amélioration.",
        technologies: ["FlexSim", "Simulation à événements discrets", "Excel", "Cartographie des processus"],
        features: [
          "Modèle du layout actuel et des flux de matières",
          "Modélisation convoyeurs, stockage et ressources humaines",
          "Comparaison de scénarios pour changements de layout et processus",
          "Analyse de débit et temps de cycle",
          "Documentation des hypothèses et résultats",
        ],
        results: [
          "Objectif : plus de 100 000 € d'économies annuelles",
          "Recommandations étayées pour la direction",
          "Réduction du risque d'essais physiques coûteux",
          "Modèle réutilisable pour la planification future",
        ],
      },
    },
    {
      id: "industrial-robots",
      title: "Intégration et programmation de robots industriels",
      category: "Robotique industrielle",
      description: "Expérience pratique en programmation de robots FANUC et DOOSAN (formation EWI), renforcement des compétences en intégration matérielle.",
      period: "Sept. 2023 - Déc. 2024",
      location: "Paris, France",
      caseStudy: {
        challenge: "Le site devait intégrer des robots industriels dans les lignes existantes tout en maintenant la productivité et la sécurité des opérateurs.",
        solution: "Formation EWI en programmation FANUC et DOOSAN. Développement de programmes robot pour manutention et assemblage. Intégration avec PLC et HMI. Mise en place des protocoles de sécurité et tests avant déploiement.",
        technologies: ["FANUC", "DOOSAN", "Programmation PLC", "HMI", "C++", "Robot Operating System"],
        features: [
          "Programmes robot sur mesure",
          "Intégration PLC et HMI",
          "Mise en œuvre des systèmes de sécurité",
          "Protocoles de maintenance et documentation",
          "Formation des opérateurs",
        ],
        results: [
          "Intégration réussie de 3 robots industriels",
          "Augmentation du débit de production de 30 %",
          "Réduction des blessures liées à la manutention de 40 %",
          "Disponibilité des systèmes robotiques : 99,5 %",
        ],
      },
    },
  ],

  certifications: [
    { name: "Certified Yellow Belt", org: "Gemba Academy", year: "2024", desc: "Certification lean et amélioration des processus" },
    { name: "Formation robotique industrielle", org: "EWI (Edison Welding Institute)", year: "2023", desc: "Certification programmation FANUC et DOOSAN" },
    { name: "ROS Developer", org: "The Construct", year: "2024", desc: "Développement et intégration ROS/ROS2 avancés" },
  ],

  additionalExpertise: [
    { title: "Méthodologie Lean Six Sigma", desc: "Certification Yellow Belt et expérience en amélioration des processus et réduction des gaspillages" },
    { title: "Collaboration pluridisciplinaire", desc: "Travail avec les parties prenantes des équipes ingénierie, opérations et management" },
    { title: "Intégration de systèmes", desc: "Expertise en intégration de systèmes robotiques avec PLC, HMI et WMS" },
    { title: "Résolution de problèmes", desc: "Analyse de cause racine et dépannage systématique en environnements industriels complexes" },
  ],

  news: [
    { type: "Formation", date: "14 janvier 2025", comments: 2, title: "Atelier avancé ROS2 Navigation", excerpt: "Fin d'un atelier intensif sur les techniques de navigation ROS2 et les nouvelles fonctionnalités Nav2.", image: "", fullArticle: "La semaine dernière j'ai terminé un atelier de trois jours sur la navigation ROS2. Nous avons vu les dernières fonctionnalités Nav2 : arbres de comportement, comportements de récupération et réglage pour les environnements type entrepôt. Les sessions pratiques sur la configuration des costmaps et l'optimisation des paramètres ont été particulièrement utiles.", commentsList: [{ author: "David Kim", date: "15 janv. 2025", text: "Ça a l'air solide. Tu le recommanderais à quelqu'un qui débute sur Nav2 ?" }, { author: "Lisa Park", date: "16 janv. 2025", text: "Les changements sur les behavior trees changent la donne." }] },
    { type: "Projet", date: "7 janvier 2025", comments: 3, title: "Nouveau projet : intégration de cobots", excerpt: "Lancement d'un projet d'intégration de robots collaboratifs sur notre site de production.", image: "", fullArticle: "J'ai démarré un projet d'intégration de cobots sur notre site. Nous évaluons les cobots pour l'assemblage et l'inspection qualité où l'interaction homme-robot est proche. Le projet inclura les analyses de risque, la conception des systèmes de sécurité et la programmation pick-and-place et inspection visuelle.", commentsList: [{ author: "Tom Rivera", date: "8 janv. 2025", text: "Quelle plateforme cobot envisages-tu ?" }, { author: "Anna Chen", date: "9 janv. 2025", text: "Au plaisir de voir comment se passe le pilote." }] },
    { type: "Conférence", date: "19 décembre 2024", comments: 2, title: "Intervention au Atlanta Robotics Meetup", excerpt: "Présentation au Atlanta Robotics Meetup sur l'automatisation d'entrepôt et les systèmes RFID.", image: "", fullArticle: "J'ai présenté notre projet de système d'inventaire RFID au Atlanta Robotics Meetup. Ce fut un plaisir de partager notre parcours, les défis et les enseignements avec la communauté robotique locale. La session Q&A a été très riche.", commentsList: [{ author: "Emily Wilson", date: "20 déc. 2024", text: "Excellente présentation Omar !" }] },
  ],

  testimonials: [
    {
      quote: "Omar aborde l'automatisation avec un esprit pragmatique, en se concentrant sur la résolution de vrais problèmes plutôt que sur des solutions uniquement techniquement intéressantes.",
      author: "Will Smylie",
      role: "Vice-président Opérations & Amélioration continue",
      company: "Marmon Metals and Services",
      image: "/testimonials/will-smylie.png",
    },
    {
      quote: "Omar est un ingénieur industriel et robotique exceptionnel qui a démontré une combinaison rare d'expertise technique, de sens opérationnel et d'innovation.",
      author: "David Guzman Jr",
      role: "Directeur Supply Chain",
      company: "Marmon Metals and Services",
      image: "/testimonials/david-guzman.png",
    },
  ],

  contactBlurb: "Je suis toujours ouvert pour échanger sur de nouvelles opportunités, des collaborations ou simplement pour connecter avec les passionnés de robotique et d'automatisation. N'hésitez pas à me contacter !",
}
