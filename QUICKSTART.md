# Quick Start Guide - Sararah Architects

Get the website up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm or yarn package manager
- Code editor (VS Code recommended)

## Installation

```bash
# 1. Navigate to project directory
cd project-1

# 2. Install dependencies (if not already done)
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# The site will automatically open at http://localhost:3000
```

## Project Structure

```
project-1/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx   # Header with hamburger menu
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── StickyCTA.jsx    # Floating contact buttons
│   │   ├── CountUp.jsx      # Animated counter
│   │   └── Model3DViewer.jsx # 3D model viewer
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Services.jsx     # Services grid
│   │   ├── Portfolio.jsx    # Portfolio gallery
│   │   ├── Process.jsx      # Timeline
│   │   ├── WhyChooseUs.jsx  # Comparison table
│   │   ├── Testimonials.jsx # Testimonial slider
│   │   ├── EnhancedFeatures.jsx # FAQ, Blog, Awards
│   │   └── Contact.jsx      # Contact form
│   ├── store/
│   │   └── useThemeStore.js # Theme state management
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies

```

## Common Tasks

### Update Content

#### Change Company Info
Edit `src/sections/Contact.jsx`:
```javascript
const contactInfo = [
  { icon: Phone, title: 'Phone', value: '+91-44-YOUR-NUMBER' },
  { icon: Mail, title: 'Email', value: 'your@email.com' },
  // ...
];
```

#### Update Portfolio Projects
Edit `src/sections/Portfolio.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Residential',
    location: 'Location, Chennai',
    image: 'https://your-image-url.jpg',
    description: 'Project description',
  },
  // Add more projects...
];
```

#### Modify Services
Edit `src/sections/Services.jsx`:
```javascript
const services = [
  {
    icon: Home,
    title: 'Your Service',
    description: 'Service description',
    color: 'from-primary to-primary-dark',
  },
  // Add more services...
];
```

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#0F766E', // Change this
    light: '#14B8A6',
    dark: '#0D5B54',
  },
  accent: {
    DEFAULT: '#D4AF37', // Change this
    light: '#F4D03F',
    dark: '#B8941F',
  },
}
```

### Add New Section

1. Create file: `src/sections/NewSection.jsx`
```jsx
import React from 'react';

const NewSection = () => {
  return (
    <section id="new-section" className="section-padding">
      <div className="container-custom">
        <h2>New Section</h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. Import in `src/App.jsx`:
```jsx
import NewSection from './sections/NewSection';

function App() {
  return (
    <>
      {/* ... other sections */}
      <NewSection />
    </>
  );
}
```

3. Add to navigation in `src/components/Navigation.jsx`:
```jsx
const navLinks = [
  // ... existing links
  { name: 'New Section', href: '#new-section' },
];
```

## Development Tips

### Hot Reload
- Save any file to see changes instantly
- No need to refresh browser

### View on Mobile
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Access from phone: `http://YOUR-IP:3000`

### Debug Responsive Design
1. Open Chrome DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Test different screen sizes

### Check for Errors
- Open browser console (F12)
- Look for red error messages
- Fix errors before deploying

## Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## Deploy

### Quick Deploy to Vercel
```bash
npm install -g vercel
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.js
server: { port: 3001 }
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Check Node version (should be 18+)
node --version

# Update Node if needed
# Download from nodejs.org
```

### Images Not Loading
- Place images in `public/` folder
- Reference as `/image.jpg` (not `./image.jpg`)
- Or use external URLs (Unsplash, Pexels)

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check for code issues

# Package Management
npm install <package>     # Add new package
npm uninstall <package>   # Remove package
npm update               # Update all packages
```

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

## Need Help?

1. Check [README.md](./README.md) for detailed documentation
2. Check [RESPONSIVE_GUIDE.md](./RESPONSIVE_GUIDE.md) for responsive design patterns
3. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
4. Search for error messages online
5. Contact: info@sararaharchitects.com

---

**Happy Coding! 🚀**

