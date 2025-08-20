'use client';

import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSpotlight } from '@/hooks/use-spotlight';
import { useState, useEffect } from 'react';

export function SpotlightFAB() {
  const { open, isOpen } = useSpotlight();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't show FAB when search is open or not mounted
  if (isOpen || !mounted) return null;

  return (
    <motion.button
      onClick={open}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -5, 5, -5, 0],
      }}
      whileTap={{ 
        scale: 0.95,
        rotate: 0
      }}
      aria-label="Open AI Assistant"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: 'spring',
          stiffness: 400,
          damping: 20,
          delay: 0.5
        }
      }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <Search className="w-5 h-5" />
      </motion.div>
      
      <motion.div 
        className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md border border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotate: [0, 10, -10, 0],
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 500, 
          damping: 20,
          delay: 0.7,
          rotate: {
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }
        }}
      >
        <Sparkles className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
      </motion.div>
      
      {/* Subtle pulsing ring effect */}
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-blue-400/30"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ 
          scale: 1.5, 
          opacity: 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeOut',
        }}
      />
    </motion.button>
  );
}
