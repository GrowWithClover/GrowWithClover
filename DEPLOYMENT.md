# Deployment Guide

This guide explains how to deploy your Clover project to different hosting platforms.

## Project Structure

Your project has been restructured to support static deployment:
- `client/` - React frontend (what gets deployed)
- `server/` - Backend server (for local development)
- `shared/` - Shared types and schemas

## 🚀 Vercel Deployment (Recommended)

### Automatic Deployment
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the `vercel.json` configuration
4. Deploy! ✨

### Manual Deployment
```bash
npm install -g vercel
npm run build:client
vercel --prod
```

## 📄 GitHub Pages Deployment

### Option 1: Automatic with GitHub Actions (Recommended)
1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Set Source to "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will automatically deploy on every push to main

### Option 2: Manual Deployment
```bash
# Build for GitHub Pages
npm run build:github

# The built files will be in the 'dist' directory
# Deploy the contents of 'dist' to GitHub Pages
```

## 🛠️ Build Commands

- `npm run build:client` - Build for Vercel/general static hosting
- `npm run build:github` - Build for GitHub Pages (includes proper base URL)
- `npm run build:static` - Alternative static build
- `npm run dev` - Local development (includes server)

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.github/workflows/deploy.yml` - GitHub Pages automatic deployment
- `vite.config.ts` - Build configuration with environment-specific settings

## 🐛 Troubleshooting

### Blank Page on Deployment
- Make sure you're using the correct build command for your platform
- Check browser console for errors
- Verify that all assets are loading correctly

### GitHub Pages Shows README
- Ensure GitHub Actions workflow is enabled
- Check that the build outputs to the correct directory
- Verify Pages is set to deploy from GitHub Actions (not from a branch)

### Routing Issues
- The `vercel.json` includes rewrites for client-side routing
- GitHub Pages deployment includes proper base URL handling

## 📁 What Gets Deployed

Only the frontend React application gets deployed to static hosting platforms. The backend server code is only used for local development.

The deployed app includes:
- React application with routing
- All UI components
- Static assets (images, icons)
- Optimized and bundled code 