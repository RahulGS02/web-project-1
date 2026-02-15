import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Box } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Simple 3D House Model
const HouseModel = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <Box args={[3, 2, 3]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#E7E5E4" />
      </Box>
      
      {/* Roof */}
      <mesh position={[0, 3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2.5, 1.5, 4]} />
        <meshStandardMaterial color="#D4AF37" />
      </mesh>
      
      {/* Door */}
      <Box args={[0.6, 1.2, 0.1]} position={[0, 0.6, 1.51]}>
        <meshStandardMaterial color="#78716C" />
      </Box>
      
      {/* Windows */}
      <Box args={[0.6, 0.6, 0.1]} position={[-1, 1.5, 1.51]}>
        <meshStandardMaterial color="#0F766E" />
      </Box>
      <Box args={[0.6, 0.6, 0.1]} position={[1, 1.5, 1.51]}>
        <meshStandardMaterial color="#0F766E" />
      </Box>
    </group>
  );
};

const Model3DViewer = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/90 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl h-[70vh] bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 glass p-4 sm:p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                3D Interactive View
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Close 3D viewer"
            >
              <X className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </button>
          </div>

          {/* 3D Canvas - Responsive */}
          <div className="w-full h-full">
            <Canvas>
              <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[5, 5, 5]} />
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  minDistance={3}
                  maxDistance={15}
                />
                
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                <directionalLight position={[-10, 10, -5]} intensity={0.5} />
                <pointLight position={[0, 10, 0]} intensity={0.5} />
                
                {/* Model */}
                <HouseModel />
                
                {/* Ground */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                  <planeGeometry args={[20, 20]} />
                  <meshStandardMaterial color="#F5F5F4" />
                </mesh>
              </Suspense>
            </Canvas>
          </div>

          {/* Controls Info - Hidden on small mobile */}
          <div className="absolute bottom-4 left-4 right-4 glass p-3 sm:p-4 rounded-xl hidden sm:block">
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <span>🖱️ Drag to rotate</span>
              <span>🔍 Scroll to zoom</span>
              <span>👆 Two fingers to pan</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Model3DViewer;

