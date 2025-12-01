export const personalInfo = {
  name: "Arivalagan S",
  title: "Software Product Developer / Associate – Product Development",
  location: "Theni, Tamil Nadu, India",
  email: "arivalagansakthi360@gmail.com",
  phone: "+91 9384371122",
  languages: "Tamil, English",
  linkedin: "https://linkedin.com/in/arivalagan-s",
  github: "https://github.com/arivalagan-s",
  twitter: "https://twitter.com/arivalagan_s",
  tagline: "To secure a challenging position in a reputable organization to expand my learnings, knowledge and skills",
  about: "Passionate Software Product Developer with expertise in building scalable web applications using React and Node.js. Experienced in developing dynamic frontend interfaces, integrating RESTful APIs, and creating reusable components. Strong problem-solving skills with a focus on delivering high-quality, maintainable code. Quick learner with hands-on experience in full-stack development, real-time systems, and cloud technologies."
};

export const skills = [
  // Frontend
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Bootstrap", level: 88, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "WebSocket", level: 82, category: "Backend" },
  
  // Database & Cloud
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 83, category: "Database" },
  { name: "AWS", level: 78, category: "Cloud" },
  
  // Tools & Concepts
  { name: "Redux", level: 88, category: "Tools" },
  { name: "Docker", level: 75, category: "Tools" }
];

export const projects = [
  {
    id: 1,
    title: "FinFlow Dashboard",
    description: "Real-time financial analytics dashboard using WebSocket live updates and interactive UI. Features dynamic data visualization, real-time transaction monitoring, and comprehensive financial reporting.",
    image: "financial dashboard",
    tech: ["React", "Node.js", "Redux", "Tailwind CSS", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Configuration Filter & Admin Panel",
    description: "Dynamic grouped checkbox filtering system with reusable UI components and backend integration. Provides advanced filtering capabilities and efficient data management.",
    image: "admin dashboard",
    tech: ["React", "TypeScript", "Redux", "Bootstrap", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Policy Privilege Manager",
    description: "Intuitive drag-and-drop policy classification interface for managing user privileges and access controls. Streamlines policy management with visual workflow.",
    image: "security system",
    tech: ["React", "Node.js", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Audit Planning System",
    description: "Multi-step audit workflow application with comprehensive validation and create/update support. Manages complete audit lifecycle from planning to execution.",
    image: "business planning",
    tech: ["React", "Redux", "TypeScript", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    title: "Associate – Product Development",
    company: "DevOpsLabs India Private Limited",
    location: "Coimbatore, Tamil Nadu",
    period: "Sep 2024 - Present",
    description: "Leading frontend development initiatives and API integration for enterprise products. Building scalable and responsive applications using modern web technologies.",
    achievements: [
      "Developed and maintained frontend applications using React for dynamic and responsive UI",
      "Built and integrated RESTful APIs using Node.js to improve scalability and performance",
      "Implemented modern state management solutions with Redux for complex applications",
      "Optimized application performance and user experience"
    ]
  },
  {
    id: 2,
    title: "Trainee – Product Development",
    company: "DevOpsLabs India Private Limited",
    location: "Coimbatore, Tamil Nadu",
    period: "Sep 2023 - Sep 2024",
    description: "Collaborated with cross-functional teams to deliver high-quality web applications. Focused on component architecture and code quality improvement.",
    achievements: [
      "Collaborated with teams to ensure seamless integration between frontend and backend",
      "Developed reusable components to eliminate code redundancy and improve maintainability",
      "Implemented responsive designs with Tailwind CSS and Bootstrap",
      "Participated in code reviews and contributed to best practices"
    ]
  },
  {
    id: 3,
    title: "Intern – Product Development",
    company: "DevOpsLabs India Private Limited",
    location: "Coimbatore, Tamil Nadu",
    period: "Jun 2023 - Aug 2023",
    description: "Gained foundational experience in full-stack development with focus on React and Node.js integration. Developed interactive user interfaces and learned industry best practices.",
    achievements: [
      "Gained hands-on development experience in frontend and backend integration",
      "Designed and implemented interactive interfaces using React",
      "Learned modern development workflows and version control with Git",
      "Successfully completed assigned projects and deliverables"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. KGISL Institute of Information Management",
    location: "Coimbatore, Tamil Nadu",
    period: "2021 - 2023",
    grade: "78%",
    description: "Specialized in Software Development and Web Technologies. Focused on modern programming paradigms, database management, and full-stack development."
  },
  {
    id: 2,
    degree: "B.Sc Computer Science",
    institution: "CPA College",
    location: "Bodinayakanur, Tamil Nadu",
    period: "2018 - 2021",
    grade: "70%",
    description: "Foundation in Computer Science fundamentals including programming, data structures, algorithms, and computer networks."
  }
];
