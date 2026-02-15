import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effect - reduced on mobile
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900"
    >
      {/* Background Image with Parallax - Static on mobile for performance */}
      <motion.div
        style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? y : 0 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/70 z-10" />
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
          />
          <source
            media="(min-width: 769px)"
            srcSet="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90"
          />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90"
            alt="Modern Chennai Architecture"
            className="w-full h-full object-cover"
          />
        </picture>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container-custom text-center px-4 sm:px-6 lg:px-8"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-white text-xs sm:text-sm font-medium">
            Chennai's Trusted Architects Since 2015
          </span>
        </motion.div>

        {/* Main Heading - Responsive Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white font-display font-bold mb-4 sm:mb-6 leading-tight px-2"
          style={{
            fontSize: 'clamp(2rem, 5vw + 1rem, 4rem)',
          }}
        >
          Top Architects in Chennai for{' '}
          <span className="gradient-text bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            Vastu-Compliant Dream Homes
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-neutral-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed"
        >
          Custom designs, 11000+ layouts, 10-year warranty, end-to-end service from plan to
          possession. Transform your vision into reality with Chennai's premier architectural firm.
        </motion.p>

        {/* CTA Buttons - Stack on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all group"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto btn bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group"
          >
            <Play className="inline-block mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>View Portfolio</span>
          </button>
        </motion.div>

        {/* Stats - Horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-6 sm:gap-8 md:gap-12 overflow-x-auto scrollbar-hide pb-4 sm:pb-0 px-4">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Years Experience' },
              { value: '11000+', label: 'Design Layouts' },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center min-w-[120px] sm:min-w-0"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-accent mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

