import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Blog', href: '#enhanced-features' },
    ],
    services: [
      { name: 'Residential Design', href: '#services' },
      { name: 'Commercial Architecture', href: '#services' },
      { name: 'Vastu Consultation', href: '#services' },
      { name: 'Construction Oversight', href: '#services' },
    ],
    resources: [
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Process', href: '#process' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'FAQ', href: '#enhanced-features' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white">Sararah</span>
                <span className="text-xs text-neutral-400 -mt-1">Architects</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Chennai's premier architectural firm specializing in Vastu-compliant residential and
              commercial designs. Transforming visions into reality since 2015.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+914412345678"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91-44-12345678</span>
              </a>
              <a
                href="mailto:info@sararaharchitects.com"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@sararaharchitects.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Anna Salai, Chennai, TN 600002</span>
              </div>
            </div>
          </div>

          {/* Links Columns - Collapsed on mobile */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400 text-center sm:text-left">
              © 2026 Sararah Architects. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;

