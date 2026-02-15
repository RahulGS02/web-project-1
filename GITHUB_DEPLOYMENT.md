# GitHub Pages Deployment Guide

## 🚀 Quick Setup

Your repository is now ready for GitHub Pages deployment with automatic CI/CD pipeline!

## Step 1: Update Repository Name in Config

**IMPORTANT:** Before pushing, update the base path in `vite.config.js` (line 7):

```javascript
base: process.env.GITHUB_PAGES ? '/YOUR-REPO-NAME/' : '/',
```

Replace `'project-1'` with your actual GitHub repository name.

For example:
- If your repo is `sararah-architects`, use `'/sararah-architects/'`
- If your repo is `my-website`, use `'/my-website/'`

## Step 2: Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Sararah Architects landing page"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub (main or master branch)
git push -u origin main
```

If you get an error about branch name, try:
```bash
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

## Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, you'll see a green checkmark ✅

## Step 5: Access Your Website

Your website will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example:
- Username: `rahul123`
- Repo: `sararah-architects`
- URL: `https://rahul123.github.io/sararah-architects/`

## 🔄 Automatic Deployment

Every time you push code to the `main` (or `master`) branch:
1. GitHub Actions automatically triggers
2. Builds your project
3. Deploys to GitHub Pages
4. Your site updates in 2-3 minutes

## 📝 Making Updates

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Update: description of changes"
git push

# That's it! GitHub Actions will automatically deploy
```

## 🛠️ What's Been Set Up

### 1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Triggers on push to main/master branch
- Installs dependencies
- Builds the project with `GITHUB_PAGES=true`
- Deploys to GitHub Pages

### 2. Vite Configuration (`vite.config.js`)
- Base path configured for GitHub Pages subdirectory
- Build optimizations with code splitting
- Source maps disabled for production

### 3. Git Configuration
- `.gitignore` - Excludes node_modules, dist, etc.
- `.gitattributes` - Ensures proper line endings

## 🔧 Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution:** Make sure you updated the base path in `vite.config.js` to match your repository name.

```javascript
// ❌ Wrong
base: process.env.GITHUB_PAGES ? '/project-1/' : '/',

// ✅ Correct (if your repo is 'my-website')
base: process.env.GITHUB_PAGES ? '/my-website/' : '/',
```

### Issue: Workflow Fails

1. Check the **Actions** tab for error details
2. Common fixes:
   - Make sure `package.json` has all dependencies
   - Check Node version (workflow uses Node 18)
   - Verify `npm ci` can install dependencies

### Issue: CSS/Images Not Loading

**Solution:** This usually means the base path is incorrect. Double-check `vite.config.js`.

### Issue: Can't Push to GitHub

```bash
# If you get authentication error, use Personal Access Token
# Go to GitHub → Settings → Developer settings → Personal access tokens
# Generate new token with 'repo' permissions
# Use token as password when pushing
```

Or use SSH:
```bash
git remote set-url origin git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git
```

## 🌐 Custom Domain (Optional)

### Add Custom Domain

1. Buy a domain (e.g., sararaharchitects.com)
2. In GitHub repo: Settings → Pages → Custom domain
3. Enter your domain: `sararaharchitects.com`
4. Update DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```
5. Wait for DNS propagation (up to 24 hours)
6. Enable "Enforce HTTPS" in GitHub Pages settings

### Update Vite Config for Custom Domain

```javascript
base: process.env.GITHUB_PAGES ? '/' : '/',
```

## 📊 Monitoring

### Check Deployment Status
- Go to **Actions** tab
- See all deployment history
- Click on any workflow run for details

### View Build Logs
- Click on a workflow run
- Click on "build" or "deploy" job
- See detailed logs

## 🎯 Next Steps

1. ✅ Push code to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Wait for deployment
4. ✅ Visit your live site!
5. 📱 Test on mobile devices
6. 🔍 Submit to Google Search Console
7. 📊 Add Google Analytics
8. 🚀 Share with the world!

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs for errors
2. Verify all steps above
3. Check GitHub Pages documentation: https://docs.github.com/pages

---

**Your website is ready to go live! 🎉**

Just push to GitHub and watch the magic happen!

