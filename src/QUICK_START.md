# Quick Start Guide - Portfolio Customization

## 🚀 5-Minute Setup

### Step 1: Update Personal Information (2 minutes)

Open `/data/portfolio.ts` and replace with your details:

```typescript
export const personalInfo = {
  name: "Your Name",                    // ← Your full name
  title: "Your Job Title",              // ← e.g., "Frontend Developer"
  location: "Your City, Country",       // ← Your location
  email: "your.email@example.com",      // ← Your email
  phone: "+XX XXXXX XXXXX",             // ← Your phone (optional)
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle",
  tagline: "Your compelling tagline",   // ← One-line pitch
  about: "Your bio paragraph..."        // ← 2-3 sentences about you
};
```

### Step 2: Update Skills (1 minute)

Still in `/data/portfolio.ts`, modify the skills array:

```typescript
export const skills = [
  { name: "Your Skill", level: 90, category: "Frontend" },
  // Add your actual skills with honest proficiency levels (0-100)
];
```

**Categories**: "Frontend", "Backend", or "DevOps"

### Step 3: Add Your Projects (2 minutes)

Replace dummy projects with your actual work:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of what it does",
    image: "keyword for project image",  // Used for image search
    tech: ["React", "Node.js", "etc"],   // Technologies used
    liveUrl: "https://your-demo.com",    // Live demo link
    githubUrl: "https://github.com/...", // Repository link
    featured: true                        // true for top projects
  },
  // Add more projects...
];
```

### Step 4: Update Experience

Add your work history:

```typescript
export const experience = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Jan 2023 - Present",
    description: "What you did in this role",
    achievements: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3"
    ]
  }
];
```

### Step 5: Update Education

```typescript
export const education = [
  {
    id: 1,
    degree: "Your Degree",
    institution: "University Name",
    location: "City, Country",
    period: "2019 - 2023",
    grade: "CGPA or Percentage",
    description: "Relevant coursework or activities"
  }
];
```

## ✅ You're Done!

Your portfolio is now personalized. The site will automatically update with your information.

---

## 🎨 Optional Customizations

### Change Color Scheme

Find and replace throughout the project:

**Current colors**:
- `from-blue-600 to-purple-600` → Your gradient
- `text-blue-600` → Your primary color
- `bg-blue-50` → Your light accent

**Pro tip**: Use VS Code's find & replace (Cmd/Ctrl + Shift + F)

### Add Resume Download

1. Add your resume PDF to `/public/resume.pdf`
2. The "Download Resume" button will automatically work

### Replace Profile Image

In `/components/portfolio/About.tsx`, find:

```typescript
<ImageWithFallback
  src="YOUR_IMAGE_URL_HERE"  // ← Replace this
  alt={personalInfo.name}
  // ...
/>
```

Or use a service like:
- LinkedIn profile picture URL
- GitHub avatar: `https://github.com/USERNAME.png`
- Gravatar: `https://gravatar.com/avatar/HASH?s=800`

### Customize Project Images

Projects automatically use placeholder images. To use specific images:

1. **Option A**: Use Unsplash URLs
   ```typescript
   image: "https://images.unsplash.com/photo-1234..."
   ```

2. **Option B**: Use your own hosted images
   ```typescript
   image: "https://your-cdn.com/project1.png"
   ```

### Change Social Media Links

In `/data/portfolio.ts`, update:
- `linkedin` - Your LinkedIn profile URL
- `github` - Your GitHub profile URL
- `twitter` - Your Twitter/X profile URL

Remove any you don't use by commenting out in:
- `/components/portfolio/Hero.tsx` (hero section icons)
- `/components/portfolio/Contact.tsx` (contact section)
- `/components/portfolio/Footer.tsx` (footer links)

---

## 🎯 Pro Tips

### Writing Great Content

**Tagline** (Hero Section):
- Keep it under 60 characters
- Focus on what you do + who you help
- Examples:
  - "Building scalable web apps for startups"
  - "Creating delightful user experiences"
  - "Solving complex problems with simple code"

**About** (About Section):
- 2-3 sentences maximum
- First sentence: What you do
- Second sentence: What you're passionate about
- Third sentence: What you're looking for

**Project Descriptions**:
- 1-2 sentences only
- Focus on the problem solved
- Mention key features
- Use action verbs

**Achievements**:
- Quantify when possible ("Increased by 40%")
- Start with action verbs (Led, Built, Improved)
- Focus on impact, not tasks

### Skill Levels Guide

Be honest with your proficiency:
- **90-100%**: Expert, can teach others
- **75-89%**: Advanced, use professionally
- **60-74%**: Intermediate, comfortable using
- **40-59%**: Basic knowledge, learning
- **< 40%**: Don't list it

### Project Selection

Choose 4-6 of your **best** projects:
- ✅ Include: Live demos, complete projects, unique features
- ❌ Avoid: Tutorials, unfinished work, common clones

Mark your top 2-3 projects as `featured: true`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Done! Your site is live in ~2 minutes.

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Drag your project folder or connect GitHub
4. Deploy

### Custom Domain (Optional)

After deploying:
1. Buy domain from Namecheap, Google Domains, etc.
2. In Vercel/Netlify dashboard, add custom domain
3. Update DNS records as instructed
4. Wait 24-48 hours for DNS propagation

---

## 📞 Need Help?

### Common Issues

**Q: Dark mode not working?**
A: Clear browser cache and refresh

**Q: Animations look choppy?**
A: Try on a different browser or device

**Q: Images not loading?**
A: Check internet connection (uses Unsplash CDN)

**Q: Want to add a blog section?**
A: Consider integrating with Medium RSS or Dev.to API

### Customization Ideas

- Add a testimonials section
- Include a blog feed
- Add email newsletter signup
- Integrate Google Analytics
- Add a chatbot widget
- Connect to your calendar for bookings

---

## ✨ Final Checklist

Before going live:

- [ ] Updated all personal information
- [ ] Added real projects with working links
- [ ] Tested all buttons and links
- [ ] Verified contact form works
- [ ] Checked mobile responsiveness
- [ ] Added resume PDF (if applicable)
- [ ] Tested in different browsers
- [ ] Set up custom domain (optional)
- [ ] Added Google Analytics (optional)
- [ ] Shared on social media!

---

**Congratulations! Your portfolio is ready to impress! 🎉**

Share your deployed portfolio and tag your work. Good luck! 🚀
