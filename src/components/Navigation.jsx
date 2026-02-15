import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useThemeStore from '../store/useThemeStore';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg py-3'
          : 'bg-neutral-900/80 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg sm:text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg sm:text-xl transition-colors ${
                isScrolled
                  ? 'text-neutral-900 dark:text-white'
                  : 'text-white'
              }`}>
                Sararah
              </span>
              <span className={`text-xs -mt-1 transition-colors ${
                isScrolled
                  ? 'text-neutral-600 dark:text-neutral-400'
                  : 'text-neutral-300'
              }`}>
                Architects
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors font-medium ${
                  isScrolled
                    ? 'text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light'
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className={`w-5 h-5 ${isScrolled ? 'text-neutral-700 dark:text-neutral-300' : 'text-white'}`} />
              ) : (
                <Sun className={`w-5 h-5 ${isScrolled ? 'text-neutral-700 dark:text-neutral-300' : 'text-white'}`} />
              )}
            </button>

            {/* Call Button - Hidden on mobile */}
            <a
              href="tel:+914412345678"
              className="hidden sm:flex items-center space-x-2 btn btn-primary"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-neutral-700 dark:text-neutral-300' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-neutral-700 dark:text-neutral-300' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                ))}
                <a
                  href="tel:+914412345678"
                  className="flex items-center justify-center space-x-2 w-full btn btn-primary mt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;

