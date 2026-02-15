import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Home,
  Building2,
  Compass,
  Box,
  HardHat,
  Wrench,
  ArrowRight,
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description:
        'Custom home designs tailored to your lifestyle, from modern villas to traditional Chennai homes.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Building2,
      title: 'Commercial Architecture',
      description:
        'Innovative commercial spaces that enhance productivity and reflect your brand identity.',
      color: 'from-accent to-accent-dark',
    },
    {
      icon: Compass,
      title: 'Vastu Consultation',
      description:
        'Expert Vastu-compliant planning for harmony, prosperity, and positive energy flow.',
      color: 'from-primary-light to-primary',
    },
    {
      icon: Box,
      title: '3D Visualizations',
      description:
        'Photorealistic 3D renders and virtual walkthroughs to visualize your dream space.',
      color: 'from-accent-light to-accent',
    },
    {
      icon: HardHat,
      title: 'Construction Oversight',
      description:
        'End-to-end project management with 470+ quality checks and real-time tracking.',
      color: 'from-primary to-accent',
    },
    {
      icon: Wrench,
      title: 'Renovations & Remodeling',
      description:
        'Transform existing spaces with modern upgrades while preserving structural integrity.',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section id="services" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
            Comprehensive Architectural Solutions
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4">
            From initial concept to final handover, we provide complete architectural services
            tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid - Responsive: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 sm:p-8 group hover:scale-105 cursor-pointer"
            >
              {/* Icon with gradient background */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <button className="inline-flex items-center space-x-2 text-primary dark:text-primary-light font-semibold text-sm sm:text-base group-hover:gap-3 transition-all min-h-touch">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our expert architects. We'll assess your
              requirements and recommend the best solution for your project.
            </p>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn btn-primary text-base sm:text-lg"
            >
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

