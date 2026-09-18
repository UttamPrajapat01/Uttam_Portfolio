import {
  PersonalInfo,
  SkillItem,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  DeveloperJourneyMilestone,
  WhatIBuildItem,
  EcosystemTier,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Uttam Kumar",
  title: "Full-Stack Developer",
  subTitle: "React Native • TypeScript • JavaScript • ASP.NET • C# • PostgreSQL • MySQL",
  currentRole: "Full-Stack Developer",
  currentCompany: "SolvoSky Technologies",
  currentLocation: "Gandhinagar, Gujarat, India",
  phone: "+91 8302785702",
  email: "uttamprajapt66@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/uttam-kumar-2846293a5/",
  gitHubUrl: "https://github.com/UttamPrajapat01",
  portfolioRepoUrl: "https://github.com/UttamPrajapat01/Uttam_Portfolio",
  profileImage: "/profile.jpg",
  heroHeadline: "Hi, I'm Uttam Kumar",
  heroSupportingText: "I build modern web and mobile applications with clean user experiences, reliable backend systems, APIs, and scalable database solutions.",
  techHighlightLine: "React Native • TypeScript • JavaScript • ASP.NET • C# • PostgreSQL • MySQL",
  aboutText1: "I am a Full-Stack Developer with a strong engineering foundation in backend systems, database management, and modern application development. I specialize in building end-to-end web and mobile applications that bridge intuitive user interfaces with high-performance, secure backend architectures.",
  aboutText2: "My journey began with deep backend and database development using ASP.NET, C#, MVC, Entity Framework, and SQL Server/PostgreSQL. During my 6-month Software Engineer Internship at Evision Info Tech Solution, I contributed to the production Marcaria DNS Admin Core Panel, building backend functionalities for domain administration and enterprise workflows.",
  aboutText3: "Today at SolvoSky Technologies, I leverage this solid backend discipline to deliver comprehensive full-stack and mobile solutions using React Native, TypeScript, JavaScript, PostgreSQL, MySQL, and REST APIs, covering the full application development lifecycle from conception to production.",
  currentTechExposure: [
    "React Native",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "Full-Stack Development",
    "Mobile Application Architecture"
  ],
  previousBackendExposure: [
    "ASP.NET",
    "ASP.NET Core",
    "C#",
    "MVC",
    "Entity Framework",
    "SQL Server",
    "Production Systems"
  ],
  broaderSkills: [
    "Angular",
    "Python",
    "Django",
    "Azure",
    "Git / GitHub",
    "Visual Studio",
    "VS Code",
    "Postman"
  ]
};

export const whatIBuildList: WhatIBuildItem[] = [
  {
    title: "Web Applications",
    description: "Modern, dynamic, and database-driven web applications engineered with clean component structures and responsive layouts.",
    iconName: "Globe",
    technologies: ["React", "Angular", "TypeScript", "HTML5/CSS3", "Bootstrap"]
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform mobile applications built with React Native and Expo, offering native performance, smooth UX, and robust state management.",
    iconName: "Smartphone",
    technologies: ["React Native", "Expo", "TypeScript", "Mobile UI/UX", "Device APIs"]
  },
  {
    title: "Backend Systems",
    description: "Enterprise-grade REST APIs, business logic layers, and server-side services using Microsoft technologies and modern architectural patterns.",
    iconName: "Server",
    technologies: ["ASP.NET Core", "C#", "ASP.NET MVC", "Entity Framework", "REST APIs"]
  },
  {
    title: "Database Solutions",
    description: "Relational data modeling, schema design, complex query optimization, and transaction handling across diverse database engines.",
    iconName: "Database",
    technologies: ["PostgreSQL", "MySQL", "SQL Server", "SSMS", "Migrations"]
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end applications uniting responsive frontends, cross-platform mobile apps, secure API endpoints, and scalable databases.",
    iconName: "Layers",
    technologies: ["React Native", "TypeScript", "ASP.NET", "PostgreSQL", "Full-Stack Lifecycle"]
  }
];

export const ecosystemTiers: EcosystemTier[] = [
  {
    id: "frontend",
    name: "Frontend & Mobile Layer",
    badge: "Client Interfaces",
    items: [
      { name: "React Native", role: "Cross-Platform Mobile" },
      { name: "TypeScript", role: "Type-Safe Client Logic" },
      { name: "JavaScript", role: "Dynamic Interaction" },
      { name: "Angular", role: "Enterprise SPA" },
      { name: "React", role: "Modern Web UI" },
      { name: "HTML5 / CSS3", role: "Semantic Structure" }
    ]
  },
  {
    id: "backend",
    name: "API & Backend Layer",
    badge: "Core Architecture",
    items: [
      { name: "ASP.NET", role: "Enterprise Web Framework" },
      { name: "ASP.NET Core", role: "High-Performance Backend" },
      { name: "C#", role: "Primary Backend Language" },
      { name: "REST APIs", role: "Service Communication" },
      { name: "Entity Framework", role: "ORM & Data Mapping" },
      { name: "Django", role: "Python Web Framework" }
    ]
  },
  {
    id: "database",
    name: "Database Layer",
    badge: "Data Persistence",
    items: [
      { name: "PostgreSQL", role: "Advanced Relational DB" },
      { name: "MySQL", role: "Production SQL Engine" },
      { name: "SQL Server", role: "Enterprise Microsoft DB" },
      { name: "SSMS", role: "Database Administration" }
    ]
  },
  {
    id: "tools",
    name: "Development & DevOps Tools",
    badge: "Workflow Ecosystem",
    items: [
      { name: "Git & GitHub", role: "Version Control" },
      { name: "Visual Studio", role: ".NET IDE" },
      { name: "VS Code", role: "Code Editor" },
      { name: "Postman", role: "API Testing & Docs" },
      { name: "Expo", role: "Mobile Toolchain" },
      { name: "Vite & npm", role: "Build & Packaging" }
    ]
  }
];

export const skillsList: SkillItem[] = [
  // Programming Languages
  {
    id: "csharp",
    name: "C#",
    category: "Programming",
    description: "Strong object-oriented programming for backend enterprise services, domain logic, and .NET web applications.",
    icon: "Code2",
    isPrimary: true
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming",
    description: "Strict typing, interface definitions, and scalable application logic for both React Native and web projects.",
    icon: "FileCode",
    isPrimary: true
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Programming",
    description: "Asynchronous programming, event-driven patterns, and modern client-side scripting.",
    icon: "FileJson",
    isPrimary: true
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    description: "Applied in data library analysis (NumPy, Pandas) and Django full-stack web architectures.",
    icon: "Terminal",
    isPrimary: false
  },
  {
    id: "sql",
    name: "SQL",
    category: "Programming",
    description: "Structured querying, multi-table joins, indexing, relational constraints, and view creation.",
    icon: "Database",
    isPrimary: true
  },

  // Mobile
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile",
    description: "Cross-platform mobile application development delivering native performance across Android and iOS.",
    icon: "Smartphone",
    isPrimary: true
  },
  {
    id: "expo",
    name: "Expo",
    category: "Mobile",
    description: "Ecosystem and tooling for rapid mobile prototyping, testing, build automation, and deployment.",
    icon: "Zap",
    isPrimary: true
  },

  // Frontend
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Component-based architecture, hooks, state management, and modern responsive user interfaces.",
    icon: "Layout",
    isPrimary: true
  },
  {
    id: "angular",
    name: "Angular",
    category: "Frontend",
    description: "Experience with modular architecture, TypeScript components, and services in HRMS web application.",
    icon: "Boxes",
    isPrimary: false
  },
  {
    id: "html5-css3",
    name: "HTML5 & CSS3",
    category: "Frontend",
    description: "Accessible semantic structure, responsive grid/flexbox layouts, and custom styling.",
    icon: "Globe",
    isPrimary: false
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Frontend",
    description: "Responsive grid systems and standardized UI components utilized in clinical management portals.",
    icon: "Columns",
    isPrimary: false
  },

  // Backend
  {
    id: "aspnet",
    name: "ASP.NET / ASP.NET Core",
    category: "Backend",
    description: "Enterprise backend framework for high-throughput APIs, controller actions, and secure web services.",
    icon: "Server",
    isPrimary: true
  },
  {
    id: "aspnet-mvc",
    name: "ASP.NET MVC",
    category: "Backend",
    description: "Model-View-Controller architecture for cleanly structured web applications and administrative panels.",
    icon: "Cpu",
    isPrimary: true
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "Backend",
    description: "Design and implementation of secure RESTful endpoints, status codes, request routing, and payload serialization.",
    icon: "Network",
    isPrimary: true
  },
  {
    id: "entity-framework",
    name: "Entity Framework",
    category: "Backend",
    description: "Object-Relational Mapping (ORM) for data operations, migrations, LINQ queries, and relational data binding.",
    icon: "Workflow",
    isPrimary: true
  },
  {
    id: "django",
    name: "Django",
    category: "Backend",
    description: "Full-stack Python web development focusing on Views, Models, Templates, and built-in Admin integration.",
    icon: "Braces",
    isPrimary: false
  },

  // Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    description: "Advanced relational database management, schema normalization, ACID compliance, and SQL operations.",
    icon: "Database",
    isPrimary: true
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Databases",
    description: "Relational database design, table relationships, and data storage for web systems.",
    icon: "Server",
    isPrimary: true
  },
  {
    id: "sql-server",
    name: "SQL Server",
    category: "Databases",
    description: "Enterprise Microsoft database management, stored procedures, table constraints, and relational schemas.",
    icon: "HardDrive",
    isPrimary: true
  },
  {
    id: "ssms",
    name: "SSMS",
    category: "Databases",
    description: "SQL Server Management Studio for database administration, query execution, and schema inspection.",
    icon: "Layers",
    isPrimary: false
  },

  // Development Tools
  {
    id: "git",
    name: "Git & GitHub",
    category: "Development Tools",
    description: "Version control, branch management, collaborative code review, and repository maintenance.",
    icon: "GitBranch",
    isPrimary: true
  },
  {
    id: "visual-studio",
    name: "Visual Studio",
    category: "Development Tools",
    description: "Comprehensive IDE for .NET development, solution architecture, debugging, and project builds.",
    icon: "AppWindow",
    isPrimary: true
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Development Tools",
    description: "Modern lightweight code editor configured for React Native, TypeScript, web development, and Python.",
    icon: "Laptop",
    isPrimary: true
  },
  {
    id: "postman",
    name: "Postman",
    category: "Development Tools",
    description: "API testing, endpoint validation, header inspection, and environment-based request execution.",
    icon: "Send",
    isPrimary: true
  },
  {
    id: "npm-vite",
    name: "npm & Vite",
    category: "Development Tools",
    description: "Package dependency management and modern ultra-fast front-end development tooling.",
    icon: "PackageCheck",
    isPrimary: false
  },

  // Cloud / Other
  {
    id: "azure",
    name: "Azure Exposure",
    category: "Cloud / Other",
    description: "Foundational exposure to cloud hosting, application deployment concepts, and Microsoft Azure ecosystem.",
    icon: "Cloud",
    isPrimary: false
  },
  {
    id: "auth-security",
    name: "API & Data Security",
    category: "Cloud / Other",
    description: "Authentication principles, token-based requests, role-based access control, and data validation.",
    icon: "ShieldCheck",
    isPrimary: false
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "solvosky",
    role: "Full-Stack Developer",
    company: "SolvoSky Technologies",
    location: "Gandhinagar, Gujarat",
    period: "2026 – Present",
    durationText: "Current Position",
    isCurrent: true,
    type: "Full-time",
    focus: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Full-Stack Development"
    ],
    responsibilities: [
      "Developing modern full-stack web and mobile application solutions.",
      "Working with React Native and TypeScript for responsive, cross-platform client interfaces.",
      "Integrating frontend and mobile applications with backend services and REST APIs.",
      "Designing and interacting with relational databases including PostgreSQL and MySQL.",
      "Utilizing modern software development tools, version control, and full-stack development methodologies."
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Full-Stack Tools"
    ],
    notice: "Active professional role at SolvoSky Technologies; projects and responsibilities can be dynamically updated."
  },
  {
    id: "evision",
    role: "Software Engineer Intern",
    company: "Evision Info Tech Solution Pvt. Ltd.",
    location: "Gandhinagar, Gujarat (On-site)",
    period: "Jan 2026 – Jun 2026",
    durationText: "6 Months",
    isCurrent: false,
    type: "Internship",
    focus: [
      "ASP.NET",
      "C#",
      "MVC",
      "Entity Framework",
      "Database Development",
      "Production Systems"
    ],
    responsibilities: [
      "Contributed to the Marcaria DNS Admin Core Panel, an active production system.",
      "Worked on backend functionality for domain management and administrative operations.",
      "Implemented backend logic and administrative features to support operational workflows.",
      "Helped streamline domain management workflows within the DNS admin panel.",
      "Collaborated with the development team to integrate backend functionality into an existing enterprise-grade system.",
      "Gained practical, hands-on exposure to production codebases, enterprise architecture, and real-world deployment practices."
    ],
    technologies: [
      "ASP.NET",
      "C#",
      "ASP.NET MVC",
      "Entity Framework",
      "SQL Server",
      "PostgreSQL"
    ],
    notice: "Official completion certificate verified and issued on 27-AUG-2026 by EVISION IT SOLUTION."
  }
];

export const projects: ProjectItem[] = [
  {
    id: "hrms-system",
    title: "Human Resource Management System (HRMS)",
    shortDescription: "Centralized HR management web application enabling automated management of employee records, attendance, leave requests, and payroll tracking.",
    category: "Full-Stack",
    technologies: [
      "Angular",
      "ASP.NET",
      "SQL Server",
      "HTML5",
      "CSS3",
      "REST APIs"
    ],
    features: [
      "Employee Profile & Records Management",
      "Attendance Tracking & Module Automation",
      "Leave Requests & Approval Flow",
      "Payroll Calculations & Detail Tracking",
      "Centralized HR Administrative Operations"
    ],
    architecture: {
      frontend: "Angular Single Page Application with modular TypeScript components and structured services",
      backend: "ASP.NET backend processing business logic, authentication, and HTTP endpoints",
      database: "SQL Server relational database storing employees, logs, leaves, and financial payroll tables"
    },
    problemStatement: "Organizations frequently encounter human error, fragmented attendance logs, and administrative delays when handling employee records, leave approvals, and payroll across manual or disconnected systems.",
    solution: "Built a centralized HRMS web application that consolidates core HR operations into a unified platform. Automates workflows between employee self-service records, attendance tracking, manager approval for leave requests, and structured payroll calculations.",
    developmentHighlights: [
      "Engineered clean separation of concerns between Angular UI and ASP.NET backend services.",
      "Implemented relational schemas in SQL Server with referential integrity across employee, leave, and payroll entities.",
      "Streamlined data flow between modules to ensure real-time status updates for attendance and leave requests.",
      "Designed responsive and structured interfaces for organizational administrators."
    ],
    gitHubUrl: null,
    liveDemoUrl: null,
    badge: "Enterprise Web App"
  },
  {
    id: "dental-clinic-system",
    title: "Dental Clinic Management System",
    shortDescription: "Web-based clinical administration system designed to streamline daily dental clinic operations, doctor scheduling, patient registrations, and treatment histories.",
    category: "Web",
    technologies: [
      "ASP.NET",
      "MySQL",
      "Bootstrap",
      "HTML5",
      "CSS3"
    ],
    features: [
      "Doctor Profile & Schedule Management",
      "Patient Registration & History Records",
      "Appointment Booking & Status Management",
      "Treatment Logs & Clinical Documentation",
      "Daily Visitor Logs & Appointment Tracking"
    ],
    architecture: {
      frontend: "HTML5, CSS3, and Bootstrap responsive UI for clinic staff and doctors",
      backend: "ASP.NET handling clinical business rules, validation, and request processing",
      database: "MySQL relational database structuring patients, doctors, appointments, and treatment logs"
    },
    problemStatement: "Dental practices require precise tracking of patient visits, appointments, and multi-session treatment notes without relying on cumbersome paper registers or prone-to-error manual records.",
    solution: "Developed an ASP.NET and MySQL web portal that automates daily clinic workflows. Allows receptionists and medical staff to register new patients, assign doctors, schedule appointments, and maintain comprehensive historical treatment records in one accessible system.",
    developmentHighlights: [
      "Designed normalized relational tables in MySQL for patients, doctors, appointments, and clinical procedures.",
      "Utilized ASP.NET server-side processing to ensure robust form validation and secure record storage.",
      "Created a clean, fast-loading, and responsive Bootstrap interface tailored for clinic front-desk operations.",
      "Implemented comprehensive appointment tracking and visitor logs for daily clinic auditing."
    ],
    gitHubUrl: null,
    liveDemoUrl: null,
    badge: "Healthcare Management"
  },
  {
    id: "mobile-development-showcase",
    title: "Cross-Platform Mobile Application Architecture",
    shortDescription: "Modern cross-platform mobile application architecture built with React Native and Expo, featuring API-connected state, offline resiliency, and responsive device UI.",
    category: "Mobile",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "REST APIs",
      "PostgreSQL"
    ],
    features: [
      "Cross-Platform Native UI (Android & iOS)",
      "Secure API Client Integration",
      "Modular Navigation & Screen Routing",
      "Persistent State & Data Caching",
      "Mobile Architecture Ready for Product & Order Modules"
    ],
    architecture: {
      mobile: "React Native (Expo) client application with TypeScript, native gestures, and responsive screens",
      backend: "RESTful API endpoints powering dynamic data retrieval and transactions",
      database: "PostgreSQL handling relational catalogs, orders, and user authentication"
    },
    problemStatement: "Modern businesses need mobile apps that deliver consistent, responsive native experiences across diverse mobile operating systems while integrating cleanly with backend database APIs.",
    solution: "Engineered a scalable React Native mobile architecture utilizing TypeScript, Expo tooling, and structured REST API integrations. Designed to support mobile commerce workflows (such as accessories/product catalogs, shopping cart state, and order tracking) with clean component hierarchies.",
    developmentHighlights: [
      "Developed type-safe React Native components utilizing TypeScript for props and API response contracts.",
      "Implemented responsive mobile views optimized for different smartphone aspect ratios.",
      "Architected clean service abstractions for connecting mobile screens with PostgreSQL-backed REST APIs.",
      "Structured for seamless expansion into authentication, product catalog, cart, and payment handling."
    ],
    gitHubUrl: null,
    liveDemoUrl: null,
    badge: "Mobile Architecture"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "evision-dotnet-cert",
    title: "Application Development on Microsoft .NET",
    organization: "EVISION IT SOLUTION",
    location: "Gandhinagar, Gujarat",
    date: "27-AUG-2026",
    topicsCovered: [
      "Application Development on Microsoft .NET",
      "C# Object-Oriented Architecture",
      "ASP.NET Web Framework & MVC",
      "Entity Framework & Database Connectivity",
      "Production System Integration (Marcaria DNS Admin Core Panel)"
    ],
    practicalExposure: [
      "Completed 6-month hands-on training and internship in enterprise application development.",
      "Contributed to live production domain management functionalities.",
      "Official certificate issued on 27-AUG-2026 with verified company seal and executive signature."
    ],
    certificateImage: "/certificates/evision_dotnet_certificate.png",
    certificatePdf: "/certificates/evision_dotnet_certificate.pdf",
    hasOfficialProof: true
  },
  {
    id: "sttp-python-django",
    title: "Short-Term Training Program (STTP) on Python Libraries",
    organization: "Specialized Technical Training",
    topicsCovered: [
      "NumPy — Numerical computation and array manipulations",
      "Pandas — Data structures, dataframes, and analytical operations",
      "Essential Python libraries for data handling",
      "Django Web Framework"
    ],
    practicalExposure: [
      "Hands-on experience building full-stack web applications using Django.",
      "Implementation of Django Views, Models, Templates, and URL routing.",
      "Integration and configuration of the Django administrative interface."
    ],
    hasOfficialProof: false
  }
];

export const educationList: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Application (MCA)",
    institution: "SK Patel Institute of Management & Computer Studies",
    location: "Gandhinagar, Gujarat",
    period: "2024 – 2026",
    score: "8.50 / 10",
    scoreType: "CPI"
  },
  {
    id: "bcom",
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Mohanlal Sukhadia University",
    location: "Udaipur, Rajasthan",
    period: "2020 – 2023",
    score: "81%",
    scoreType: "Percentage"
  }
];

export const developerJourney: DeveloperJourneyMilestone[] = [
  {
    year: "2020 – 2023",
    title: "Bachelor of Commerce (B.Com)",
    subtitle: "Mohanlal Sukhadia University, Udaipur, Rajasthan",
    description: "Graduated with 81% percentage, developing strong analytical thinking, commercial logic, and structured problem-solving fundamentals.",
    badge: "Foundation"
  },
  {
    year: "2024 – 2026",
    title: "Master of Computer Application (MCA)",
    subtitle: "SK Patel Institute of Management & Computer Studies",
    description: "Achieved a 8.50 / 10 CPI while building in-depth competence in software engineering, object-oriented programming, data structures, and database systems.",
    badge: "Academic Excellence"
  },
  {
    year: "Jan 2026 – Jun 2026",
    title: "Software Engineer Intern (6 Months)",
    subtitle: "Evision Info Tech Solution Pvt. Ltd., Gandhinagar",
    description: "Worked on-site on the production Marcaria DNS Admin Core Panel. Implemented backend functionalities, domain management operations, ASP.NET MVC, Entity Framework, and database workflows.",
    badge: "Production Experience"
  },
  {
    year: "2026 – Present",
    title: "Full-Stack Developer (Current Position)",
    subtitle: "SolvoSky Technologies, Gandhinagar, Gujarat",
    description: "Engineering modern web and mobile applications using React Native, TypeScript, JavaScript, PostgreSQL, MySQL, REST APIs, and full-stack development tools.",
    badge: "Current Milestone"
  }
];
