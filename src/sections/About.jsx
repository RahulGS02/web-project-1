import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import CountUp from '../components/CountUp';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Award, value: 500, suffix: '+', label: 'Projects Delivered', color: 'text-primary' },
    { icon: Users, value: 100, suffix: '%', label: 'Client Satisfaction', color: 'text-accent' },
    { icon: TrendingUp, value: 10, suffix: '+', label: 'Years Experience', color: 'text-primary' },
    { icon: Shield, value: 10, suffix: ' Year', label: 'Warranty', color: 'text-accent' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
            Crafting Timeless Spaces in Chennai
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4">
            Expert architects blending innovation and Vastu principles to create dream homes across
            Chennai. We transform your vision into architectural masterpieces with precision,
            quality, and unwavering commitment.
          </p>
        </motion.div>

        {/* Stats Grid - Responsive: 1-col mobile, 2-col tablet, 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 sm:p-8 text-center group hover:scale-105 transition-transform"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                {inView && <CountUp end={stat.value} duration={2} />}
                {stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Grid - Responsive: 1-col mobile, 2-col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Sararah Architects Team"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 glass p-4 sm:p-6 rounded-xl shadow-xl max-w-[200px] sm:max-w-xs"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">
                11000+
              </div>
              <div className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                Custom Design Layouts Available
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white">
              Your Vision, Our Expertise
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              At Sararah Architects, we specialize in creating bespoke residential and commercial
              spaces that reflect your unique style while adhering to Vastu principles. Our team of
              experienced architects brings together traditional wisdom and modern design innovation.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'Vastu-compliant designs for harmony and prosperity',
                'End-to-end service from concept to construction',
                '470+ quality checks at every stage',
                'Transparent pricing with escrow payment protection',
                '10-year structural warranty for peace of mind',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn btn-primary mt-6"
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

