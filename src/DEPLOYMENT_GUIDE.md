# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your portfolio code in a Git repository
- A Vercel account (free tier available at [vercel.com](https://vercel.com))

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Code to Git Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Portfolio website"

# Add your remote repository
git remote add origin <your-repository-url>

# Push to GitHub/GitLab/Bitbucket
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your portfolio repository
5. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
6. Click **"Deploy"**

### Step 3: Wait for Deployment

Vercel will:
- Install dependencies
- Build your project
- Deploy to a production URL
- This usually takes 1-2 minutes

### Step 4: Your Site is Live! 🎉

You'll get a URL like: `https://your-portfolio.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? arivalagan-portfolio
# - In which directory is your code located? ./
```

### Step 4: Deploy to Production

```bash
vercel --prod
```

## Custom Domain Setup (Optional)

### Add Custom Domain

1. Go to your project on Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `arivalagan.dev`)
4. Follow DNS configuration instructions
5. Vercel automatically provisions SSL certificate

### DNS Configuration

Add these records to your domain provider:

**For root domain (arivalagan.dev):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Environment Variables (If Needed)

If you add any API keys or secrets later:

1. Go to **Settings** → **Environment Variables**
2. Add your variables:
   - Variable name
   - Value
   - Select environments (Production, Preview, Development)
3. Redeploy for changes to take effect

## Automatic Deployments

Vercel automatically deploys:
- **Production:** Every push to `main` branch
- **Preview:** Every push to other branches and pull requests

## Update Your Portfolio

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio content"
git push

# Vercel automatically detects the push and redeploys
```

## Performance Optimizations

Your portfolio is already optimized with:
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Image optimization
- ✅ Gzip compression
- ✅ Global CDN
- ✅ Automatic HTTPS

## Monitoring

View deployment details in Vercel Dashboard:
- Build logs
- Performance metrics
- Analytics
- Error tracking

## Troubleshooting

### Build Fails

1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### 404 Errors on Refresh

The `vercel.json` file handles SPA routing. Ensure it exists:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Slow Build Times

- Build typically takes 1-2 minutes
- Check for large dependencies
- Review build logs for warnings

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Contact Vercel Support](https://vercel.com/support)

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build           # Create production build
npm run preview         # Preview production build

# Deploy
vercel                  # Deploy to preview
vercel --prod          # Deploy to production

# Vercel CLI
vercel ls              # List deployments
vercel rm <deployment> # Remove deployment
vercel logs <url>      # View logs
```

---

**Ready to deploy?** Follow Method 1 above to get your portfolio live in minutes! 🚀
