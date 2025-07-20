# 🚀 Netlify Drag & Drop Deployment Guide

## ✅ **Method 1: Drag Entire Project Folder (Recommended)**

1. **Download your project** from Blink (click "Download Code")
2. **Extract the ZIP file** to get your project folder
3. **Go to** [netlify.com/drop](https://app.netlify.com/drop)
4. **Drag the ENTIRE project folder** (not just dist) to the drop zone
5. **Netlify will automatically:**
   - Detect it's a Vite React project
   - Run `npm install`
   - Run `npm run build`
   - Deploy the `dist` folder

## 🎯 **Why This Works:**

Your project has a `netlify.toml` file that tells Netlify:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18
- **Redirects:** All routes go to index.html (for SPA)

## 📁 **What to Drag:**

```
📁 single-page-website-6stkc714/  ← Drag this entire folder
├── package.json
├── netlify.toml
├── src/
├── public/
└── ... (all other files)
```

## ⚡ **Alternative: Manual Build + Drag dist/**

If you prefer to build locally first:

1. **In your project folder:**
   ```bash
   npm install
   npm run build
   ```

2. **Drag only the `dist/` folder** to Netlify

## 🔧 **Troubleshooting:**

- ✅ **Blank page?** → Already fixed! No more Blink scripts
- ✅ **Arabic fonts?** → Working! expo-arabic.woff2 included
- ✅ **Build fails?** → Check Node version (should be 18+)

## 🎉 **Expected Result:**

Your Arabic single-page website will deploy successfully with:
- ✅ All sections working
- ✅ Smooth scrolling
- ✅ Arabic fonts rendering
- ✅ Mobile responsive design
- ✅ Contact form functional

**Just drag the entire project folder to Netlify and it will handle everything automatically!** 🚀