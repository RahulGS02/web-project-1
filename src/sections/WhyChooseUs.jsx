import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comparisons = [
    {
      feature: 'Vastu Expertise',
      sararah: true,
      others: false,
      description: 'Certified Vastu consultants on every project',
    },
    {
      feature: '3D Visualization Tools',
      sararah: 'Advanced',
      others: 'Basic/None',
      description: 'Photorealistic renders and virtual walkthroughs',
    },
    {
      feature: 'Structural Warranty',
      sararah: '10 Years',
      others: 'None',
      description: 'Comprehensive warranty coverage',
    },
    {
      feature: 'Quality Checks',
      sararah: '470+',
      others: 'Limited',
      description: 'Rigorous inspection at every stage',
    },
    {
      feature: 'Project Tracking',
      sararah: 'Real-time App',
      others: 'Manual Updates',
      description: 'Live progress tracking with photos',
    },
    {
      feature: 'Payment Protection',
      sararah: 'Escrow',
      others: 'Direct',
      description: 'Secure milestone-based payments',
    },
    {
      feature: 'Design Revisions',
      sararah: 'Unlimited',
      others: 'Limited',
      description: 'Revise until you\'re 100% satisfied',
    },
    {
      feature: 'Post-Handover Support',
      sararah: '2 Years',
      others: 'None',
      description: 'Ongoing maintenance support',
    },
  ];

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-6 h-6 text-primary" />
      ) : (
        <X className="w-6 h-6 text-red-500" />
      );
    }
    return <span className="font-semibold">{value}</span>;
  };

  return (
    <section id="why-choose-us" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
            The Sararah Advantage
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4">
            See how we stand apart from traditional architects with our comprehensive approach and
            client-first philosophy.
          </p>
        </motion.div>

        {/* Desktop Table View - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full card overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-accent text-white">
                <th className="px-6 py-4 text-left font-display text-lg">Feature</th>
                <th className="px-6 py-4 text-center font-display text-lg">Sararah Architects</th>
                <th className="px-6 py-4 text-center font-display text-lg">Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="border-b border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-neutral-900 dark:text-white mb-1">
                      {item.feature}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-primary dark:text-primary-light">
                    {renderValue(item.sararah)}
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-500 dark:text-neutral-400">
                    {renderValue(item.others)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Card View - Stacked cards */}
        <div className="md:hidden space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-4 sm:p-6"
            >
              <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2">
                {item.feature}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {item.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                    Sararah
                  </div>
                  <div className="text-primary dark:text-primary-light flex items-center justify-center">
                    {renderValue(item.sararah)}
                  </div>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-center">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                    Others
                  </div>
                  <div className="text-neutral-500 dark:text-neutral-400 flex items-center justify-center">
                    {renderValue(item.others)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn btn-primary text-base sm:text-lg"
          >
            Experience the Difference
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

