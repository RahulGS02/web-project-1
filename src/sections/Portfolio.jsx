import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, X } from 'lucide-react';
import Model3DViewer from '../components/Model3DViewer';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [show3D, setShow3D] = useState(false);

  const filters = ['All', 'Residential', 'Commercial', 'Vastu'];

  const projects = [
    {
      id: 1,
      title: 'Modern Villa in Anna Nagar',
      category: 'Residential',
      location: 'Anna Nagar, Chennai',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      description: '4BHK luxury villa with contemporary design and Vastu compliance',
    },
    {
      id: 2,
      title: 'Commercial Complex T Nagar',
      category: 'Commercial',
      location: 'T Nagar, Chennai',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      description: 'Multi-story commercial building with modern amenities',
    },
    {
      id: 3,
      title: 'Vastu Home in Adyar',
      category: 'Vastu',
      location: 'Adyar, Chennai',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      description: 'Traditional Vastu-compliant home with modern interiors',
    },
    {
      id: 4,
      title: 'Luxury Apartment Velachery',
      category: 'Residential',
      location: 'Velachery, Chennai',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
      description: '3BHK premium apartment with smart home features',
    },
    {
      id: 5,
      title: 'Office Space OMR',
      category: 'Commercial',
      location: 'OMR, Chennai',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      description: 'Contemporary office space with collaborative work areas',
    },
    {
      id: 6,
      title: 'Vastu Villa Mylapore',
      category: 'Vastu',
      location: 'Mylapore, Chennai',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      description: 'Heritage-style villa with complete Vastu alignment',
    },
    {
      id: 7,
      title: 'Penthouse ECR',
      category: 'Residential',
      location: 'ECR, Chennai',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
      description: 'Beachfront penthouse with panoramic views',
    },
    {
      id: 8,
      title: 'Retail Complex Porur',
      category: 'Commercial',
      location: 'Porur, Chennai',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      description: 'Modern retail space with high footfall design',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="mt-2 sm:mt-4 font-display font-bold text-neutral-900 dark:text-white">
            Transforming Visions into Reality
          </h2>
          <p className="mt-4 sm:mt-6 text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4">
            Explore our diverse portfolio of residential and commercial projects across Chennai.
          </p>
        </motion.div>

        {/* Filter Tabs - Horizontal scroll on mobile */}
        <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto scrollbar-hide pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all min-h-touch ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive: 1-col mobile, 2-col tablet, 3-col desktop */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View 3D Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setShow3D(true);
                    }}
                    className="absolute top-4 right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-2 sm:mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    📍 {project.location}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 3D Viewer Modal */}
      {show3D && selectedProject && (
        <Model3DViewer project={selectedProject} onClose={() => setShow3D(false)} />
      )}
    </section>
  );
};

export default Portfolio;

