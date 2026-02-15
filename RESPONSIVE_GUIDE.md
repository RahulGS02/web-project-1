# Responsive Design Implementation Guide

This document explains how responsiveness is implemented throughout the Sararah Architects website.

## Mobile-First Approach

All styles are written mobile-first, meaning base styles target mobile devices, and we use Tailwind's responsive prefixes to override for larger screens.

```jsx
// ❌ Wrong: Desktop-first
<div className="grid-cols-3 sm:grid-cols-1">

// ✅ Correct: Mobile-first
<div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

## Breakpoint System

### Tailwind Default Breakpoints
- `sm`: 640px (Small tablets, large phones in landscape)
- `md`: 768px (Tablets)
- `lg`: 1024px (Laptops, small desktops)
- `xl`: 1280px (Desktops)
- `2xl`: 1536px (Large desktops, 4K)

### Usage Pattern
```jsx
<div className="
  px-4           // Mobile: 16px padding
  sm:px-6        // Tablet: 24px padding
  lg:px-8        // Desktop: 32px padding
  max-w-7xl      // Max width constraint
  mx-auto        // Center horizontally
">
```

## Responsive Typography

### Using clamp() for Fluid Typography
```css
/* In tailwind.config.js */
'responsive-5xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)'
```

This creates text that:
- Starts at 2.5rem (40px) on mobile
- Scales with viewport width
- Caps at 4rem (64px) on large screens

### Implementation
```jsx
<h1 className="text-responsive-5xl">
  // Automatically scales between 40px and 64px
</h1>
```

### Minimum Font Sizes
- Body text: Minimum 16px (1rem)
- Small text: Minimum 14px (0.875rem)
- Headings: Scale proportionally

## Layout Patterns

### 1. Grid Layouts
```jsx
// Services, Portfolio, Blog Cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {/* Cards automatically reflow */}
</div>
```

### 2. Flex Layouts
```jsx
// Navigation, CTAs
<div className="flex flex-col sm:flex-row items-center gap-4">
  {/* Stack vertically on mobile, horizontal on tablet+ */}
</div>
```

### 3. Hidden/Visible Elements
```jsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">Desktop only content</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">Mobile only content</div>
```

## Component-Specific Responsive Patterns

### Navigation
```jsx
// Mobile: Hamburger menu
<button className="lg:hidden">
  <Menu />
</button>

// Desktop: Full navigation
<div className="hidden lg:flex">
  {navLinks.map(...)}
</div>
```

### Hero Section
```jsx
// Responsive height
<section className="min-h-screen">
  // Responsive font size
  <h1 style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 4rem)' }}>
  
  // Stack buttons on mobile
  <div className="flex flex-col sm:flex-row gap-4">
    <button>CTA 1</button>
    <button>CTA 2</button>
  </div>
</section>
```

### Cards
```jsx
<div className="card p-4 sm:p-6 lg:p-8">
  // Padding increases with screen size
</div>
```

### Images
```jsx
// Responsive image with proper aspect ratio
<picture>
  <source media="(max-width: 768px)" srcSet="image-mobile.jpg" />
  <source media="(min-width: 769px)" srcSet="image-desktop.jpg" />
  <img src="image-desktop.jpg" alt="..." className="w-full h-auto object-cover" />
</picture>
```

## Touch-Friendly Design

### Minimum Touch Target Size
```css
/* In index.css */
.min-h-touch {
  min-height: 44px; /* Apple's recommended minimum */
}
```

### Implementation
```jsx
<button className="btn min-h-touch px-6 py-3">
  // Ensures button is easy to tap on mobile
</button>
```

## Horizontal Scroll Prevention

### Container Constraints
```css
.container-custom {
  @apply w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
}
```

### Overflow Control
```css
html, body {
  max-width: 100vw;
  overflow-x: hidden;
}
```

## Performance Optimizations for Mobile

### 1. Conditional Rendering
```jsx
// Disable parallax on mobile for performance
const isMobile = window.innerWidth < 768;
<motion.div style={{ y: isMobile ? 0 : parallaxY }}>
```

### 2. Lazy Loading
```jsx
<img src="..." loading="lazy" />
```

### 3. Responsive Images
```jsx
<img 
  srcSet="
    image-320w.jpg 320w,
    image-640w.jpg 640w,
    image-1024w.jpg 1024w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

## Testing Responsive Design

### Chrome DevTools
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test these breakpoints:
   - 320px (iPhone SE)
   - 375px (iPhone 12/13)
   - 768px (iPad)
   - 1024px (iPad Pro)
   - 1440px (Desktop)

### Real Device Testing
- iOS: Safari on iPhone/iPad
- Android: Chrome on various devices
- Test touch interactions
- Verify no horizontal scroll
- Check font readability

## Common Responsive Patterns

### Sticky CTA
```jsx
// Mobile: Bottom bar
<div className="fixed bottom-0 left-0 right-0 lg:hidden">
  <div className="flex gap-3 p-4">
    <button className="flex-1">Call</button>
    <button className="flex-1">Inquire</button>
  </div>
</div>

// Desktop: Floating button
<div className="hidden lg:block fixed bottom-6 right-6">
  <button>Quick Contact</button>
</div>
```

### Comparison Table
```jsx
// Desktop: Table
<table className="hidden md:block">...</table>

// Mobile: Stacked cards
<div className="md:hidden space-y-4">
  {items.map(item => (
    <div className="card">
      <h3>{item.feature}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>Sararah: {item.sararah}</div>
        <div>Others: {item.others}</div>
      </div>
    </div>
  ))}
</div>
```

### Timeline
```jsx
// Mobile: Vertical
<div className="lg:hidden">
  <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary" />
  {/* Vertical timeline items */}
</div>

// Desktop: Horizontal
<div className="hidden lg:block">
  <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary" />
  {/* Horizontal timeline items */}
</div>
```

## Accessibility Considerations

### Focus States
```jsx
<button className="focus:ring-2 focus:ring-primary focus:outline-none">
  // Visible focus indicator for keyboard navigation
</button>
```

### ARIA Labels
```jsx
<button aria-label="Toggle menu" className="lg:hidden">
  <Menu />
</button>
```

### Semantic HTML
```jsx
<nav>
  <ul>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
```

## Debugging Responsive Issues

### Check for Fixed Widths
```bash
# Search for hardcoded widths
grep -r "width: [0-9]" src/
```

### Verify Container Constraints
- All content should be within `.container-custom`
- No elements should exceed viewport width
- Use `max-w-full` on images

### Test Overflow
```css
/* Temporarily add to debug */
* {
  outline: 1px solid red;
}
```

## Best Practices Checklist

- [ ] Use mobile-first approach
- [ ] Test all breakpoints (320px, 768px, 1024px, 1440px)
- [ ] Ensure touch targets are minimum 44px
- [ ] Use responsive typography (clamp or responsive classes)
- [ ] Implement proper image srcset
- [ ] No horizontal scroll on any screen size
- [ ] Test on real devices
- [ ] Verify form inputs are usable on mobile
- [ ] Check navigation works on all sizes
- [ ] Ensure CTAs are visible and accessible

---

**Remember**: If it works on mobile, it will work everywhere. Always start with mobile design!

