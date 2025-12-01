export const portfolioData = {
  personal: {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "Chennai, India",
    tagline: "Building exceptional digital experiences with modern technologies",
    email: "johndoe@gmail.com",
    phone: "+91 98765 43210",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    twitter: "twitter.com/johndoe",
  },
  
  about: {
    description: "Passionate developer specializing in building high-performance web applications with modern UI and clean architecture. I enjoy exploring cloud technologies and real-time systems. With over 3 years of experience, I've worked on diverse projects ranging from enterprise applications to AI-powered tools.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", // Professional portrait
    highlights: [
      "3+ years of professional experience",
      "15+ successful projects delivered",
      "Cloud & DevOps expertise",
      "Open source contributor"
    ]
  },

  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 92, category: "Frontend" },
    { name: "TailwindCSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "MySQL", level: 85, category: "Backend" },
    { name: "AWS", level: 80, category: "Cloud" },
    { name: "Docker", level: 85, category: "DevOps" },
    { name: "Kubernetes", level: 75, category: "DevOps" },
  ],

  projects: [
    {
      id: 1,
      title: "Project Manager App",
      description: "A comprehensive Kanban-style project management tool with real-time collaboration features, drag-and-drop functionality, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      liveUrl: "https://example.com/project-manager",
      githubUrl: "https://github.com/johndoe/project-manager",
      featured: true
    },
    {
      id: 2,
      title: "Cafe Ordering App",
      description: "Full-stack restaurant ordering system with real-time order tracking, payment integration, and kitchen management dashboard.",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MySQL", "Stripe"],
      liveUrl: "https://example.com/cafe-app",
      githubUrl: "https://github.com/johndoe/cafe-app",
      featured: true
    },
    {
      id: 3,
      title: "AI Document Assistant",
      description: "ChatGPT-powered intelligent document analysis tool with OCR capabilities, semantic search, and automated data extraction.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["Next.js", "OpenAI", "Python", "MongoDB"],
      liveUrl: "https://example.com/ai-assistant",
      githubUrl: "https://github.com/johndoe/ai-assistant",
      featured: true
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, wishlist, cart management, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Redux", "Node.js", "Stripe"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/johndoe/ecommerce",
      featured: false
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and customizable reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "D3.js", "Node.js", "Redis"],
      liveUrl: "https://example.com/analytics",
      githubUrl: "https://github.com/johndoe/analytics",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Unified social media management platform with post scheduling, analytics, and engagement tracking across multiple platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com/social-dashboard",
      githubUrl: "https://github.com/johndoe/social-dashboard",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "SampleTech Solutions",
      location: "Chennai, India",
      period: "2022 - Present",
      type: "work",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Architected microservices-based platform serving 100K+ users",
        "Reduced application load time by 60% through optimization",
        "Led team of 5 developers on major product launches"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebCraft Studios",
      location: "Remote",
      period: "2021 - 2022",
      type: "work",
      description: "Developed responsive web applications and interactive user interfaces for diverse clients across various industries.",
      achievements: [
        "Built 20+ client websites with 100% satisfaction rate",
        "Implemented design system used across all projects",
        "Improved team productivity by 40% with reusable components"
      ]
    },
    {
      id: 3,
      title: "B.Tech in Computer Science",
      company: "Anna University",
      location: "Chennai, India",
      period: "2017 - 2021",
      type: "education",
      description: "Graduated with First Class Honors. Focused on software engineering, algorithms, and web technologies.",
      achievements: [
        "CGPA: 8.7/10",
        "Best Project Award for Final Year Project",
        "Active member of Coding Club and Tech Community"
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at SampleTech",
      content: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at WebCraft Studios",
      content: "Working with John was a pleasure. He brings innovative solutions and always goes the extra mile to ensure project success.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ]
};
