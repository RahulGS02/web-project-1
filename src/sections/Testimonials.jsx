import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Anna Nagar, Chennai',
      rating: 5,
      text: 'Sararah Architects transformed our dream home into reality! Their Vastu expertise and attention to detail were exceptional. The 3D visualizations helped us make perfect decisions.',
      image: 'https://i.pravatar.cc/150?img=12',
      project: '4BHK Villa',
    },
    {
      name: 'Priya Sharma',
      location: 'Adyar, Chennai',
      rating: 5,
      text: 'Outstanding service from start to finish. The real-time tracking app kept us informed throughout construction. Delivered on time with impeccable quality!',
      image: 'https://i.pravatar.cc/150?img=45',
      project: 'Luxury Apartment',
    },
    {
      name: 'Venkat Subramanian',
      location: 'T Nagar, Chennai',
      rating: 5,
      text: 'Professional team with deep knowledge of both modern design and traditional Vastu. Our commercial space exceeded all expectations. Highly recommended!',
      image: 'https://i.pravatar.cc/150?img=33',
      project: 'Office Complex',
    },
    {
      name: 'Lakshmi Iyer',
      location: 'Mylapore, Chennai',
      rating: 5,
      text: 'The 10-year warranty and 470+ quality checks gave us complete peace of mind. Our Vastu-compliant home is beautiful and brings positive energy.',
      image: 'https://i.pravatar.cc/150?img=47',
      project: 'Traditional Home',
    },
    {
      name: 'Arun Krishnan',
      location: 'ECR, Chennai',
      rating: 5,
      text: 'Exceptional architects who truly listen to your needs. The unlimited design revisions ensured we got exactly what we wanted. Worth every rupee!',
      image: 'https://i.pravatar.cc/150?img=68',
      project: 'Beach House',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4">
            Join hundreds of satisfied homeowners who trusted us with their dream projects.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="card p-6 sm:p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 text-center mb-6 sm:mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-display font-bold text-lg sm:text-xl text-neutral-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonials[currentIndex].location}
                    </div>
                    <div className="text-xs text-primary font-medium mt-1">
                      {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white dark:bg-neutral-700 shadow-lg hover:scale-110 transition-transform z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700 dark:text-neutral-300" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white dark:bg-neutral-700 shadow-lg hover:scale-110 transition-transform z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700 dark:text-neutral-300" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all min-h-touch ${
                  index === currentIndex
                    ? 'bg-primary w-8 sm:w-12'
                    : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

