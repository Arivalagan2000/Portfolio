# Customization Examples

Real-world examples of how to customize different aspects of your portfolio.

## 🎨 Color Scheme Changes

### Example 1: Green & Teal Theme

Replace these gradient combinations throughout the project:

**Find**: `from-blue-600 to-purple-600`
**Replace with**: `from-green-600 to-teal-600`

**Find**: `from-blue-500 to-purple-500`
**Replace with**: `from-green-500 to-teal-500`

**Find**: `text-blue-600 dark:text-blue-400`
**Replace with**: `text-green-600 dark:text-green-400`

### Example 2: Orange & Red Theme (Warm)

**Primary Gradient**: `from-orange-600 to-red-600`
**Secondary Gradient**: `from-orange-500 to-red-500`
**Text Accent**: `text-orange-600 dark:text-orange-400`

### Example 3: Minimalist Grayscale

**Primary Gradient**: `from-gray-700 to-gray-900`
**Secondary Gradient**: `from-gray-600 to-gray-800`
**Text Accent**: `text-gray-700 dark:text-gray-300`

---

## 👤 Profile Scenarios

### Scenario 1: Freelancer Portfolio

```typescript
// /data/portfolio.ts
export const personalInfo = {
  name: "Sarah Johnson",
  title: "Freelance Full Stack Developer",
  tagline: "Transforming ideas into beautiful, functional web applications",
  about: "I help startups and businesses bring their digital products to life. With 5+ years of experience in full-stack development, I specialize in React, Node.js, and cloud technologies. Available for new projects."
};
```

Add a "Hire Me" button in Hero.tsx:
```typescript
<motion.a
  href="mailto:your@email.com?subject=Project Inquiry"
  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full"
>
  Hire Me
</motion.a>
```

### Scenario 2: Job Seeker

```typescript
export const personalInfo = {
  name: "Michael Chen",
  title: "Frontend Developer",
  tagline: "Seeking opportunities to create exceptional user experiences",
  about: "Recent graduate with a passion for React and modern web technologies. Built 10+ projects including e-commerce platforms and SaaS applications. Looking for junior developer positions."
};
```

### Scenario 3: Senior Developer

```typescript
export const personalInfo = {
  name: "Alex Rodriguez",
  title: "Senior Software Architect",
  tagline: "Building scalable systems that power millions of users",
  about: "15+ years of experience leading engineering teams and architecting enterprise solutions. Expert in distributed systems, microservices, and cloud infrastructure. Open to consulting opportunities."
};
```

---

## 🎯 Project Display Variations

### Option 1: GitHub-Focused (Open Source Developer)

```typescript
// Emphasize GitHub contributions
export const projects = [
  {
    id: 1,
    title: "React Component Library",
    description: "Open-source UI component library with 1000+ GitHub stars",
    tech: ["React", "TypeScript", "Storybook"],
    liveUrl: "https://storybook-demo.com",
    githubUrl: "https://github.com/yourusername/library",
    featured: true,
    stats: {
      stars: "1.2k",
      forks: "234",
      downloads: "50k/month"
    }
  }
];
```

### Option 2: Client Work (Agency/Freelance)

```typescript
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform for RetailCo",
    description: "Increased online sales by 150% with modern shopping experience",
    tech: ["Next.js", "Stripe", "Prisma"],
    liveUrl: "https://retailco.com",
    githubUrl: null, // Private repo
    featured: true,
    client: "RetailCo Inc.",
    impact: "+150% sales, 50k+ users"
  }
];
```

### Option 3: Side Projects (Indie Hacker)

```typescript
export const projects = [
  {
    id: 1,
    title: "TaskMaster Pro",
    description: "SaaS productivity app with $5k MRR and 500+ paying users",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://taskmasterpro.com",
    githubUrl: null,
    featured: true,
    metrics: {
      revenue: "$5k MRR",
      users: "500+ paying",
      growth: "+40% MoM"
    }
  }
];
```

---

## 💼 Experience Variations

### For New Graduates

```typescript
export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "TechStart Inc.",
    period: "Jun 2024 - Aug 2024",
    description: "Built features for company's main product using React and Node.js",
    achievements: [
      "Developed user authentication system serving 10k+ users",
      "Reduced page load time by 40% through optimization",
      "Collaborated with design team on 3 major features"
    ]
  }
];
```

### For Career Switchers

```typescript
export const experience = [
  {
    id: 1,
    title: "Junior Developer",
    company: "WebCraft Studio",
    period: "Jan 2024 - Present",
    description: "Transitioned from marketing to web development. Building modern web applications.",
    achievements: [
      "Completed 15+ client projects within first 6 months",
      "Learned React, Node.js, and deployed 5 production apps",
      "Mentored 2 bootcamp students in web development"
    ]
  },
  {
    id: 2,
    title: "Marketing Manager → Developer Transition",
    company: "Previous Career",
    period: "2019 - 2023",
    description: "5 years in digital marketing before transitioning to software development",
    achievements: [
      "Managed $500k+ marketing budgets",
      "Led team of 5 marketing specialists",
      "Self-taught programming while working full-time"
    ]
  }
];
```

---

## 🎓 Education Variations

### For Self-Taught Developers

```typescript
export const education = [
  {
    id: 1,
    degree: "Self-Taught Developer",
    institution: "Online Learning (freeCodeCamp, Udemy, etc.)",
    period: "2022 - 2024",
    grade: "1000+ hours of learning",
    description: "Completed Full Stack Developer curriculum including React, Node.js, databases, and deployment. Built 20+ projects from scratch."
  },
  {
    id: 2,
    degree: "Bachelor of Arts in Psychology",
    institution: "State University",
    period: "2016 - 2020",
    grade: "3.7 GPA",
    description: "Developed strong problem-solving and analytical skills"
  }
];
```

### For Bootcamp Grads

```typescript
export const education = [
  {
    id: 1,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Le Wagon / General Assembly / etc.",
    period: "2024",
    grade: "Top 10% of cohort",
    description: "Intensive 12-week program covering Ruby on Rails, React, SQL, and agile development"
  }
];
```

---

## 🔧 Component Modifications

### Add Certifications Section

Create `/components/portfolio/Certifications.tsx`:

```typescript
import { motion, useInView } from 'motion/react';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "ABC123"
  }
];

export default function Certifications() {
  // Similar structure to Experience component
  // Add animated cards for each certification
}
```

Add to App.tsx after Experience section.

### Add Testimonials Section

```typescript
const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    content: "Best developer we've worked with. Delivered ahead of schedule.",
    avatar: "https://..."
  }
];
```

### Add Services Section (for Freelancers)

```typescript
const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications",
    price: "Starting at $3,000",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
  }
];
```

---

## 📱 Mobile Customization

### Simplify Animations for Mobile

In any component, add:

```typescript
const isMobile = window.innerWidth < 768;

<motion.div
  animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
  // Simpler animation on mobile
>
```

### Different Layout for Mobile

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

---

## 🌍 Multi-Language Support

Add language toggle:

```typescript
// contexts/LanguageContext.tsx
const languages = {
  en: {
    hero: {
      title: "Full Stack Developer",
      tagline: "Building amazing websites"
    }
  },
  es: {
    hero: {
      title: "Desarrollador Full Stack",
      tagline: "Construyendo sitios web increíbles"
    }
  }
};
```

---

## 🎯 Call-to-Action Variations

### For Job Seekers

```typescript
<button>
  View My Resume
</button>
<button>
  Schedule Interview
</button>
```

### For Freelancers

```typescript
<button>
  Start a Project
</button>
<button>
  Check Availability
</button>
```

### For Open Source Maintainers

```typescript
<button>
  Sponsor My Work
</button>
<button>
  Contribute on GitHub
</button>
```

---

## 💡 Advanced Features

### Add Blog Integration

```typescript
// Fetch from Dev.to, Medium, or your own blog
const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch('https://dev.to/api/articles?username=youruser')
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);
```

### Add Analytics

```typescript
// Add to App.tsx
useEffect(() => {
  // Google Analytics
  window.gtag('config', 'GA_MEASUREMENT_ID');
}, []);
```

### Add Live Chat

```typescript
// Integrate Tawk.to, Intercom, or Crisp
useEffect(() => {
  // Add chat widget script
}, []);
```

---

## 🎨 Typography Changes

### Change Font

Add to HTML head or import in CSS:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Update in globals.css:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

### Popular Font Combinations

1. **Modern**: Inter + Space Grotesk
2. **Elegant**: Playfair Display + Source Sans Pro
3. **Tech**: JetBrains Mono + Roboto
4. **Classic**: Georgia + Arial

---

**These examples should cover most customization scenarios. Mix and match to create your unique portfolio!**
