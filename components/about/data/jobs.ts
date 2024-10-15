export const jobs = [
    {
      company: "Route Inc.",
      position: "Senior Full Stack Developer",
      type: "Contract",
      startDate: "December 2023",
      endDate: "March 2024",
      achievements: [
        "Overhauled a 5-year-old React application, migrating from legacy Redux to Redux Toolkit and functional components, reducing bug reports by 50% and API requests by 75%.",
        "Led platform integration through Nest.js microservices, merging three products and migrating databases to MongoDB.",
        "Designed a robust state-management system with a comprehensive analytics layer for granular feature tracking."
      ],
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Nest.js",
        "Node.js",
        "MongoDB",
        "OAuth",
        "Nginx",
        "JWT Authentication"
      ]
    },
    {
      company: "TechMade Co.",
      position: "Senior Full Stack Developer",
      startDate: "January 2021",
      endDate: "December 2023",
      achievements: [
        "Launched an NFT trading platform attracting 60,000 users in two months, securing $400k funding.",
        "Refactored a monolithic React and .NET application into a decoupled Next.js and Node.js app, achieving a 200ms load time improvement and a 10x decrease in application crashes.",
        "Migrated from AWS EC2 to Vercel serverless hosting, reducing monthly operational costs by 30%."
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "Vercel",
        "AWS",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "Redis"
      ]
    },
    {
      company: "Subletinn Inc.",
      position: "Full Stack Developer",
      startDate: "January 2019",
      endDate: "December 2021",
      achievements: [
        "Developed a property management dashboard, securing $100k in seed funding.",
        "Built automation tools leading to a 24% increase in lead conversion rates.",
        "Engineered the platform using React.js, Firebase, and Flask for back-end API management and data analysis."
      ],
      technologies: [
        "React.js",
        "Firebase",
        "Flask",
        "PostgreSQL",
        "MERN Stack",
        "Python"
      ]
    },
    {
      company: "Outcome Health",
      position: "Android Engineer",
      startDate: "October 2017",
      endDate: "May 2018",
      achievements: [
        "Configured a Zygote stage APK for 20,000+ devices to improve APK deployment.",
        "Resolved Android memory leaks in Fragment/Activity structures for over 140,000 devices."
      ],
      technologies: [
        "Android SDK",
        "Java",
        "Kotlin",
        "APK Configuration"
      ]
    }
  ];
  
  export const education = {
    institution: "Grinnell College",
    degree: "Computer Science B.A.",
    startDate: "August 2013",
    endDate: "May 2017"
  };
  
  export const skills = {
    languages: {
    JavaScript: "JavaScript",
    TypeScript: "TypeScript",
    Python: "Python",
    GOlang: "GOlang",
    Kotlin: "Kotlin",
    Ruby: "Ruby",
    SQL: "SQL",
    NoSQL: "NoSQL",
    BashZSHScripting: "Bash/ZSH Scripting"
  },
  frontend: {
    React: "React.js",
    Angular: "Angular 2+",
    Svelte: "Svelte.js",
    Next: "Next.js",
    Three: "Three.js",
    Highcharts: "Highcharts.js"
  },
  backend: {
    Node: "Node.js",
    Express: "Express.js",
    Flask: "Flask",
    FastAPI: "FastAPI",
    Django: "Django",
    Nest: "Nest.js",
    RubyOnRails: "Ruby on Rails",
    SpringBoot: "Spring Boot"
  },
  databases: {
    PostgreSQL: "PostgreSQL",
    MySQL: "MySQL",
    Supabase: "Supabase",
    MongoDB: "MongoDB",
    Redis: "Redis",
    Firebase: "Firebase",
    GraphQL: "GraphQL"
  },
  infrastructure: {
    Docker: "Docker",
    Kubernetes: "Kubernetes",
    GCP: "GCP",
    AWS: "AWS",
    Nginx: "Nginx",
    Proxmox: "Proxmox",
    Ansible: "Ansible"
  },
  other: {
    MachineLearningLLMs: "Machine Learning & LLMs",
    OnPrem: "On-prem (Proxmox, Nginx, Ansible, SSL, No-trust authorization)"
  }
  };

  export const projects = [
    {
      name: "Jail App",
      description: "Enhanced the stability of the platform facilitating communication for incarcerated individuals.",
      achievements: [
        "Ported the AI voice assistant from Python to Node.js, improving response times by 1.5 seconds."
      ]
    },
    {
      name: "Un-Googling (on-prem Project)",
      description: "Architected a private infrastructure using Docker and Proxmox to host internal applications for document editing and storage, eliminating reliance on external services."
    },
    {
      name: "MLS Housing Sentiment",
      description: "Developed a Python script to analyze MLS data for real estate investment opportunities in Chicago."
    }
  ];

// Types
export type Job = (typeof jobs)[number];

export type Education = typeof education;

export type Skills = typeof skills;

export type Project = (typeof projects)[number];

// You can also create more specific types if needed:
export type SkillCategory = keyof Skills;

export type SkillList = Skills[SkillCategory];

// If you want to ensure type safety for the job type field:
export type JobType = "Contract" | "Full-time" | "Part-time";

// A more detailed Job type with optional fields and specific JobType
export type DetailedJob = {
  company: string;
  position: string;
  type?: JobType;
  startDate: string;
  endDate?: string;
  achievements: string[];
  technologies: string[];
};

// Ensure the jobs array conforms to the DetailedJob type
export const typedJobs: DetailedJob[] = jobs as DetailedJob[];
