import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MessageSquare,
  MapPin,
  PenTool,
  Eye,
  HardHat,
  Key,
} from 'lucide-react';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'Discuss your vision, requirements, and budget with our expert architects.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: MapPin,
      title: 'Site Survey & Soil Test',
      description: 'Comprehensive site analysis and soil testing for optimal foundation planning.',
      color: 'from-primary-light to-primary',
    },
    {
      icon: PenTool,
      title: 'Custom Design & Revisions',
      description: 'Personalized architectural plans with unlimited revisions until perfect.',
      color: 'from-accent-light to-accent',
    },
    {
      icon: Eye,
      title: '3D Visualization & Approval',
      description: 'Photorealistic 3D renders and virtual walkthroughs for your approval.',
      color: 'from-accent to-accent-dark',
    },
    {
      icon: HardHat,
      title: 'Construction & Tracking',
      description: 'Real-time project tracking with 470+ quality checks at every stage.',
      color: 'from-primary to-accent',
    },
    {
      icon: Key,
      title: 'Handover & Warranty',
      description: 'Final inspection, documentation, and 10-year structural warranty.',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section id="process" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
            From Vision to Reality in 6 Steps
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4">
            Our streamlined process ensures transparency, quality, and timely delivery at every
            stage of your project.
          </p>
        </motion.div>

        {/* Timeline - Vertical on mobile, Horizontal on desktop */}
        <div className="relative">
          {/* Desktop Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />

          {/* Mobile Timeline Line - Hidden on desktop */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Mobile: Horizontal layout */}
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl z-10 relative`}
                    >
                      <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:mt-6 lg:text-center">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 dark:text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line - Only between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-12 h-1 bg-gradient-to-r from-primary to-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              Ready to Start Your Dream Project?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8">
              Join 500+ satisfied clients who trusted us with their architectural needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="w-full sm:w-auto btn btn-primary text-base sm:text-lg"
              >
                Start Your Project
              </button>
              <a
                href="tel:+914412345678"
                className="w-full sm:w-auto btn btn-outline text-base sm:text-lg"
              >
                Call +91-44-12345678
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

