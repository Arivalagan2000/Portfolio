# Modern Portfolio Website

A highly professional, animated personal portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion.

## ✨ Features

### Design & UI
- 🎨 **Unique, Premium Design** - Original design with glassmorphism and gradient effects
- 🌗 **Dark/Light Mode** - Smooth theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Page scroll animations, micro-interactions, and transitions
- 🎭 **Interactive Elements** - Hover effects, tilt animations, and particle background

### Sections
1. **Hero Section**
   - Animated particle background
   - Floating gradient orbs
   - Social media links
   - CTA buttons (Contact Me, Download Resume)
   - Smooth scroll indicator

2. **About Section**
   - Profile image with hover effects
   - Animated skill progress bars
   - Skills organized by category (Frontend, Backend, DevOps)
   - Experience stats

3. **Projects Section**
   - 3D tilt effect on cards
   - Project modal with full details
   - Featured project badges
   - Live demo and GitHub links
   - Tech stack tags

4. **Experience & Education**
   - Animated vertical timeline
   - Work experience with achievements
   - Educational background
   - Scroll-triggered animations

5. **Contact Section**
   - Fully functional contact form
   - Contact information cards
   - Social media links
   - Form validation
   - Success notifications

6. **Footer**
   - Quick navigation links
   - Scroll to top button
   - Social media links
   - Copyright information

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS 4.0
- **Animations**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Images**: Unsplash API integration

## 🚀 Getting Started

### Installation

The project is already set up and ready to run. Simply view it in your browser!

### Customization

To personalize the portfolio with your own information:

1. **Edit Personal Information**
   - Open `/data/portfolio.ts`
   - Update `personalInfo` with your details:
     ```typescript
     export const personalInfo = {
       name: "Your Name",
       title: "Your Title",
       email: "your.email@example.com",
       // ... other fields
     };
     ```

2. **Update Skills**
   - Modify the `skills` array in `/data/portfolio.ts`
   - Adjust skill levels (0-100) and categories

3. **Add Your Projects**
   - Edit the `projects` array
   - Replace dummy project data with your own:
     ```typescript
     {
       id: 1,
       title: "Your Project",
       description: "Description...",
       image: "search query for unsplash",
       tech: ["React", "Node.js"],
       liveUrl: "https://...",
       githubUrl: "https://...",
       featured: true
     }
     ```

4. **Update Experience**
   - Modify `experience` and `education` arrays
   - Add your work history and achievements

5. **Customize Colors**
   - The site uses a blue-purple gradient theme
   - To change colors, search for `from-blue-600 to-purple-600` in components
   - Replace with your preferred gradient colors

## 🎨 Theme Customization

### Color Scheme
The portfolio uses a professional blue-purple gradient theme:
- Primary: Blue (600)
- Secondary: Purple (600)
- Accent: Pink for highlights

### Dark Mode
- Dark mode is enabled by default
- Users can toggle between light/dark modes
- Preference is saved in localStorage

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ✨ Animation Details

### Scroll Animations
- Sections fade in and slide up when scrolled into view
- Staggered animations for list items
- Timeline items animate from left to right

### Hover Effects
- Cards lift and scale on hover
- 3D tilt effect on project cards
- Button micro-interactions
- Smooth color transitions

### Particle Background
- Animated particle system in hero section
- Particles move and connect based on proximity
- Responsive to screen size

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in `/components/portfolio/`
2. Import and add it to `/App.tsx`
3. Add navigation link in `/components/portfolio/Navbar.tsx`

### Modifying Animations
- All animations use Framer Motion
- Adjust `initial`, `animate`, and `transition` props
- Modify animation variants in component files

### Changing Fonts
- Update font imports in HTML head or CSS
- Modify font family in TailwindCSS config if needed

## 📊 SEO & Performance

### Optimization Tips
1. **Images**: Replace placeholder images with optimized versions
2. **Lazy Loading**: Images automatically use fallback loading
3. **Code Splitting**: React automatically splits code
4. **Caching**: Set up caching headers on deployment

### SEO Recommendations
- Add meta tags in HTML head
- Include Open Graph tags for social sharing
- Create a sitemap.xml
- Add structured data (JSON-LD)

## 🚀 Deployment

### Recommended Platforms
- **Vercel** (Recommended) - Zero config deployment
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free static hosting
- **Cloudflare Pages** - Fast global CDN

### Deployment Steps (Vercel)
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Deploy with default settings
4. Custom domain setup (optional)

### Environment Variables
No environment variables required for basic deployment.

## 📄 Resume Integration

To enable resume download:
1. Add your resume PDF to `/public/resume.pdf`
2. The download button in hero section will automatically work
3. Or update the link in `/components/portfolio/Hero.tsx`

## 🎯 Best Practices

### Content
- Keep descriptions concise and impactful
- Use action verbs in experience section
- Quantify achievements when possible
- Keep skills list relevant and current

### Images
- Use high-quality, professional photos
- Optimize images for web (< 500KB)
- Ensure images have proper alt text
- Use consistent aspect ratios

### Performance
- Minimize animations on mobile
- Lazy load images below the fold
- Test on real devices
- Monitor Core Web Vitals

## 🐛 Troubleshooting

### Common Issues

**Dark mode not persisting**
- Check browser localStorage is enabled
- Clear browser cache and try again

**Animations not smooth**
- Reduce animation complexity on older devices
- Check browser hardware acceleration is enabled

**Images not loading**
- Ensure internet connection for Unsplash images
- Replace with local images if needed

## 📞 Support & Customization

Need help customizing your portfolio?
- Review component documentation in code comments
- Check Framer Motion docs for animation help
- TailwindCSS docs for styling questions

## 📝 License

This portfolio template is free to use for personal projects.

## 🙏 Credits

- Design inspiration from modern portfolio trends
- Icons by Lucide
- Images by Unsplash
- Animations by Framer Motion

---

**Ready to showcase your work!** 🚀

Replace the dummy data in `/data/portfolio.ts` with your information and deploy!
