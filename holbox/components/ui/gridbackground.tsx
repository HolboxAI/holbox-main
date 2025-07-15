
"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className = '' }: GridBackgroundProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!gridRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = gridRef.current?.getBoundingClientRect();
      
      if (!rect) return;
      
      // Calculate mouse position relative to the grid
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Move grid slightly based on mouse position
      const moveX = (x - rect.width / 2) / rect.width * 10;
      const moveY = (y - rect.height / 2) / rect.height * 10;
      
      if (gridRef.current) {
        gridRef.current.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <motion.div 
      ref={gridRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: '50% 50%',
        transition: 'background-position 0.3s ease'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}
