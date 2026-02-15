import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronDown,
  Award,
  BookOpen,
  MapPin,
  Box as BoxIcon,
} from 'lucide-react';

const EnhancedFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'What is the cost of hiring an architect in Chennai?',
      answer:
        'Our architectural fees typically range from ₹50-150 per sq.ft depending on project complexity, customization level, and services required. We offer transparent pricing with no hidden costs.',
    },
    {
      question: 'How long does the design and construction process take?',
      answer:
        'Design phase typically takes 4-6 weeks including revisions. Construction timeline varies based on project size - a typical 2000 sq.ft home takes 8-12 months from foundation to handover.',
    },
    {
      question: 'Do you provide Vastu consultation for existing homes?',
      answer:
        'Yes! We offer standalone Vastu consultation services for existing properties, including remedial solutions and renovation recommendations to align with Vastu principles.',
    },
    {
      question: 'What areas in Chennai do you serve?',
      answer:
        'We serve all areas across Chennai including Anna Nagar, Adyar, T Nagar, Velachery, OMR, ECR, Mylapore, Porur, and surrounding suburbs within 50km radius.',
    },
    {
      question: 'Is the 10-year warranty transferable?',
      answer:
        'Yes, our 10-year structural warranty is transferable to new owners if you sell the property, adding significant value to your investment.',
    },
  ];

  const blogPosts = [
    {
      title: 'Top 10 Vastu Tips for Chennai Homes',
      excerpt: 'Essential Vastu principles for positive energy and prosperity in your home.',
      image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&q=80',
      date: 'Feb 10, 2026',
    },
    {
      title: 'Modern vs Traditional Architecture',
      excerpt: 'Finding the perfect balance between contemporary design and cultural heritage.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
      date: 'Feb 5, 2026',
    },
    {
      title: 'Sustainable Building Materials',
      excerpt: 'Eco-friendly construction choices for Chennai\'s climate and environment.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80',
      date: 'Jan 28, 2026',
    },
  ];

  const awards = [
    { name: 'Best Architect 2025', org: 'Chennai Architecture Awards' },
    { name: 'ISO 9001:2015 Certified', org: 'Quality Management' },
    { name: 'Green Building Excellence', org: 'IGBC' },
    { name: 'Client Choice Award', org: 'BuildersHub' },
  ];

  return (
    <section id="enhanced-features" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom space-y-16 sm:space-y-24">
        {/* FAQ Section */}
        <div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left min-h-touch"
                >
                  <span className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 sm:px-6 pb-4 sm:pb-5"
                  >
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Teaser */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
              <BookOpen className="inline-block w-4 h-4 mr-2" />
              Latest Insights
            </span>
            <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
              From Our Blog
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group cursor-pointer hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs text-primary mb-2">{post.date}</div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
              <Award className="inline-block w-4 h-4 mr-2" />
              Recognition
            </span>
            <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
              Awards & Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-4 sm:p-6 text-center"
              >
                <Award className="w-8 h-8 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white mb-1">
                  {award.name}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatures;

