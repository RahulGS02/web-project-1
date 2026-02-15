import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile: Bottom Sticky Bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          >
            <div className="glass border-t border-neutral-200 dark:border-neutral-700 px-4 py-3 flex items-center justify-between gap-3">
              <a
                href="tel:+914412345678"
                className="flex-1 btn btn-primary py-3 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">Call Now</span>
              </a>
              <button
                onClick={scrollToContact}
                className="flex-1 btn btn-accent py-3 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-semibold">Inquire</span>
              </button>
            </div>
          </motion.div>

          {/* Desktop: Floating Action Button */}
          <div className="hidden lg:block">
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  className="fixed bottom-24 right-6 z-40 glass rounded-2xl p-4 shadow-2xl w-64"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-neutral-900 dark:text-white">
                      Quick Actions
                    </h3>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="tel:+914412345678"
                      className="w-full btn btn-primary py-3 flex items-center justify-center space-x-2 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call +91-44-12345678</span>
                    </a>
                    <button
                      onClick={scrollToContact}
                      className="w-full btn btn-outline py-3 flex items-center justify-center space-x-2 text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="fixed bottom-6 right-24 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40"
              aria-label="Quick contact"
            >
              {isExpanded ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <MessageSquare className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;

