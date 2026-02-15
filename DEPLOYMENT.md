# Deployment Guide - Sararah Architects

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

## Deploy to Netlify

### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build the project
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Option 2: Netlify Dashboard
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Option 3: Continuous Deployment
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automatically on every push

## Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -g gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

## Environment Variables

If you need environment variables (e.g., for analytics, API keys):

### Create `.env` file:
```env
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_API_URL=your-api-url
```

### Access in code:
```javascript
const analyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
```

### Set in Vercel:
1. Go to Project Settings
2. Environment Variables
3. Add your variables

### Set in Netlify:
1. Site Settings → Build & Deploy
2. Environment → Environment Variables
3. Add your variables

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain (e.g., `sararaharchitects.com`)
3. Update DNS records as instructed
4. SSL certificate is automatic

### Netlify
1. Domain Settings → Add Custom Domain
2. Follow DNS configuration steps
3. Enable HTTPS (automatic)

## Performance Checklist Before Deploy

- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run preview`
- [ ] Check bundle size: Should be < 500KB
- [ ] Optimize images (use WebP format where possible)
- [ ] Remove console.logs
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit (target: 95+ score)
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Check SEO meta tags
- [ ] Verify responsive design on all breakpoints

## Post-Deployment

### Add Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `index.html` or use environment variable
3. Implement tracking events for CTAs

### Add Hotjar (Optional)
```html
<!-- Add to index.html <head> -->
<script>
  (function(h,o,t,j,a,r){
    // Hotjar tracking code
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

### Monitor Performance
- Set up Vercel Analytics (automatic on Vercel)
- Use Google PageSpeed Insights
- Monitor Core Web Vitals

### SEO Submission
1. Submit sitemap to Google Search Console
2. Submit to Bing Webmaster Tools
3. Create and submit sitemap.xml

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Verify image paths are correct
- Use absolute paths from `public` folder
- Check image URLs are accessible

### 404 on Refresh
- Ensure `vercel.json` or `_redirects` file is configured
- For Netlify, create `public/_redirects`:
  ```
  /*    /index.html   200
  ```

### Slow Performance
- Enable compression (automatic on Vercel/Netlify)
- Optimize images with tools like TinyPNG
- Lazy load heavy components
- Use CDN for images (Cloudinary, Imgix)

## Continuous Integration

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- Project Issues: Create issue on GitHub

---

**Happy Deploying! 🚀**

