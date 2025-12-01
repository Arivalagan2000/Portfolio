# Modern Portfolio Website

A premium, modern portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- ✨ **Modern UI/UX** - Clean, professional, and minimalistic design
- 🎨 **Dark/Light Mode** - Theme toggle with localStorage persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations** - Framer Motion powered animations
- ⚡ **Fast Performance** - Optimized React components
- 🎯 **Interactive Elements** - Hover effects, particle background, and micro-interactions
- 📧 **Contact Form** - Form validation with user-friendly error messages

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **TailwindCSS v4.0** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **React Intersection Observer** - Scroll animations

## 📂 Project Structure

```
/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ParticleBackground.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   └── TimelineItem.tsx
├── data/
│   └── portfolio.ts          # Edit this file to customize content
├── styles/
│   └── globals.css
└── App.tsx
```

## 🎨 Customization

All portfolio content is centralized in `/data/portfolio.ts`. Simply edit this file to update:

- Personal information (name, title, location, contact details)
- About section content
- Skills and expertise
- Project showcase
- Work experience and education
- Social media links

## 🚀 Deployment

This portfolio is designed to work seamlessly with:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Deployment Notes

This is a **pure frontend application** with no backend dependencies. If you encounter any build errors related to backend services (like Supabase), please ensure:

1. No unnecessary dependencies are auto-detected
2. Build configuration is set for a static React application
3. Build command: `npm run build` or equivalent
4. Output directory: `dist` or `build`

## 📝 Sections

1. **Hero** - Eye-catching introduction with particle animation
2. **About** - Profile, description, and skills with animated progress bars
3. **Projects** - Filterable project showcase with hover effects
4. **Experience** - Animated timeline for work history and education
5. **Contact** - Form with validation and social links
6. **Footer** - Quick links and credits

## 🎯 Key Features Explained

### Particle Background
Custom canvas-based particle animation that creates an interactive background effect in the hero section.

### Animated Timeline
Alternating layout timeline component for work experience and education with smooth scroll-triggered animations.

### Dark Mode
Persistent theme toggle that saves user preference in localStorage and respects system preferences.

### Form Validation
Client-side form validation with real-time error messages and success states.

## 📄 License

This portfolio template is free to use and customize for your personal or commercial projects.

## 🙏 Credits

- Icons: [Lucide Icons](https://lucide.dev/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Images: [Unsplash](https://unsplash.com/)

---

Made with ❤️ using React and TailwindCSS
