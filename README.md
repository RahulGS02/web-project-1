# Sararah Architects - Modern Landing Page

A fully responsive, high-converting landing page for Sararah Architects, a premier architectural firm in Chennai, India. Built with React, Vite, Tailwind CSS, and modern web technologies.

## 🌟 Features

### Core Features
- **Fully Responsive Design**: Seamlessly adapts to all screen sizes (320px to 4K displays)
- **Mobile-First Approach**: Optimized for mobile devices with touch-friendly interactions
- **Dark/Light Mode**: Theme toggle with persistent storage
- **SEO Optimized**: Complete meta tags, Open Graph, Schema.org markup for LocalBusiness
- **Performance Optimized**: Lazy loading, responsive images, optimized for Lighthouse 95+ score

### Sections
1. **Hero Section**: Full-screen with parallax effects, responsive typography, animated stats
2. **About Us**: Animated counters, responsive grid layout, company highlights
3. **Services**: 6 service cards with hover animations, responsive 1/2/3 column layout
4. **Portfolio**: Filterable project gallery with 3D model viewer (React Three Fiber)
5. **Process**: 6-step timeline (vertical on mobile, horizontal on desktop)
6. **Why Choose Us**: Comparison table (responsive cards on mobile)
7. **Testimonials**: Auto-rotating carousel with swipe gestures
8. **Enhanced Features**: FAQ accordion, blog teaser, awards, Google Maps
9. **Contact**: Form with validation (React Hook Form + Zod), responsive layout
10. **Sticky CTA**: Bottom bar on mobile, floating button on desktop

### Technical Highlights
- **3D Visualization**: Interactive 3D house models using React Three Fiber
- **Smooth Animations**: Framer Motion for scroll-triggered reveals and transitions
- **Form Validation**: Zod schema validation with React Hook Form
- **Responsive Images**: Proper srcset implementation for different screen sizes
- **Accessibility**: ARIA labels, keyboard navigation, min 44px touch targets
- **Modern UI**: Glassmorphism effects, gradient accents, smooth transitions

## 🚀 Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.1.4
- **Styling**: Tailwind CSS 3.4.1 with custom responsive breakpoints
- **Animations**: Framer Motion 11.0.3
- **3D Graphics**: React Three Fiber 8.15.16, Three.js 0.161.0
- **Form Handling**: React Hook Form 7.50.1, Zod 3.22.4
- **State Management**: Zustand 4.5.0
- **Icons**: Lucide React 0.323.0
- **Utilities**: React Intersection Observer 9.8.1

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

The design uses Tailwind's default breakpoints with custom responsive utilities:

- **Mobile**: < 640px (sm) - Single column, stacked layout
- **Tablet**: 640px - 1024px (sm to lg) - 2 column layouts
- **Laptop**: 1024px - 1440px (lg to xl) - 3 column layouts
- **Desktop**: > 1440px (2xl) - Full multi-column layouts

### Responsive Typography
Uses `clamp()` for fluid typography that scales smoothly:
- Headings: `clamp(2rem, 5vw + 1rem, 4rem)`
- Body text: Minimum 16px for readability
- Touch targets: Minimum 44px height for mobile

## 🎨 Design System

### Colors
- **Primary**: Deep Teal (#0F766E) - Trust, professionalism
- **Accent**: Gold (#D4AF37) - Elegance, premium quality
- **Neutrals**: Warm grays for backgrounds and text

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (paragraphs, UI)

### Spacing
- Mobile: Reduced padding (py-12)
- Desktop: Generous spacing (py-24)

## 🔧 Key Components

### Navigation
- Responsive hamburger menu on mobile
- Smooth scroll to sections
- Theme toggle button
- Sticky header with glass effect

### Hero
- Responsive background images (different sizes for mobile/desktop)
- Parallax effect (disabled on mobile for performance)
- Animated badge and stats
- Stacked CTAs on mobile

### 3D Model Viewer
- Interactive 3D house models
- Touch-enabled controls (rotate, zoom, pan)
- Responsive canvas scaling
- Modal overlay with close button

### Contact Form
- Full validation with Zod schema
- Responsive 2-column layout (1-col on mobile)
- Loading states and success messages
- Integrated Google Maps

### Sticky CTA
- Bottom bar on mobile with Call/Inquire buttons
- Floating action button on desktop
- Appears after scrolling 500px

## 📊 Performance Optimizations

1. **Lazy Loading**: Images load only when in viewport
2. **Responsive Images**: Different image sizes for different screens
3. **Code Splitting**: Dynamic imports for heavy components
4. **Optimized Animations**: Reduced motion on mobile
5. **Minimal Dependencies**: Only essential packages included

## 🌐 SEO Features

- Complete meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Schema.org LocalBusiness markup
- Geo tags for Chennai location
- Semantic HTML structure

## 🧪 Testing Checklist

- [ ] Test on Chrome DevTools responsive mode (320px, 768px, 1024px, 1440px)
- [ ] Test on real devices (iPhone, iPad, Android)
- [ ] Verify no horizontal scroll on any screen size
- [ ] Check touch targets are minimum 44px
- [ ] Test form validation
- [ ] Verify 3D viewer works on mobile
- [ ] Test dark/light mode toggle
- [ ] Check all animations perform smoothly
- [ ] Run Lighthouse audit (target: 95+ score)

## 📝 Customization

### Update Content
- Edit section content in `src/sections/*.jsx`
- Update contact info in `src/sections/Contact.jsx`
- Modify portfolio projects in `src/sections/Portfolio.jsx`

### Change Colors
- Edit `tailwind.config.js` theme colors
- Update gradient classes in components

### Add New Sections
1. Create component in `src/sections/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

## 📄 License

This project is created for Sararah Architects. All rights reserved.

## 🤝 Support

For issues or questions, contact: info@sararaharchitects.com

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

