import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import EnhancedFeatures from './sections/EnhancedFeatures';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import useThemeStore from './store/useThemeStore';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Initialize theme on mount
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <EnhancedFeatures />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;

