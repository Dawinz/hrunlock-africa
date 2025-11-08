# Deployment Guide - Vercel

## Quick Deploy

Your React app is ready to deploy to Vercel! Here's how:

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - React app"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Configuration

The following files are already configured:

- ✅ `vercel.json` - React Router configuration
- ✅ `package.json` - Build scripts
- ✅ `vite.config.js` - Vite build configuration

## Before Deploying

### 1. Update Formspree Form IDs

Replace `YOUR_FORM_ID` in:
- `src/pages/Home.jsx` (line ~20)
- `src/pages/Journals.jsx` (line ~20)
- `src/pages/Contact.jsx` (line ~30)

### 2. Update Google Maps Embed

Update the iframe src in `src/pages/Contact.jsx` with your actual Google Maps embed URL.

### 3. Update Analytics Domain

Update the `data-domain` in `index.html` if needed.

## Build Settings (Auto-detected by Vercel)

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## Environment Variables

If you need environment variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Post-Deployment

After deployment:
1. Test all pages and navigation
2. Test form submissions
3. Verify images load correctly
4. Check mobile responsiveness

## Support

For issues, check:
- Vercel deployment logs
- Browser console for errors
- Network tab for failed requests

