# Netlify Deployment Guide

This project is ready for deployment on Netlify. Follow these steps:

## Quick Deploy

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build` locally
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your site will be live instantly!

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy

## Build Settings

If using Git integration, use these build settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18` (set in netlify.toml)

## Features Included

✅ **Optimized Configuration**
- `netlify.toml` with build settings
- SPA routing with `_redirects`
- Asset caching headers
- Node.js 18 environment

✅ **Performance Optimizations**
- Static asset caching (1 year)
- Font file optimization
- CSS/JS minification via Vite

✅ **Arabic Font Support**
- Custom Arabic fonts included
- Proper font loading optimization

## Environment Variables

No environment variables are required for this static site.

## Custom Domain

After deployment, you can:
1. Add a custom domain in Netlify dashboard
2. Enable HTTPS (automatic)
3. Configure DNS settings

## Troubleshooting

- **Build fails**: Check Node.js version (should be 18+)
- **Fonts not loading**: Ensure font files are in `/public` directory
- **Routing issues**: Verify `_redirects` file exists in `/public`

Your site is now ready for production! 🚀