"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { GridBackground } from '@/components/ui/gridbackground';
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };return (
  <div className={inter.className}>
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      ref={containerRef}
    >
      <GridBackground className="opacity-30" />
      
      <div className="max-w-8xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="z-10 pt-16 lg:pt-0 lg:pl-8 tracking-tighter">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="inline-block mb-6 px-4 py-2 text-sm font-medium rounded-full"
            style={{ 
              backgroundColor: 'hsl(221, 70%, 50% , 0.1)',
              color: 'hsl(221, 70%, 50%)'
            }}
          >
            Next-Generation AI Platform
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold leading-[1] text-dark-900 mb-6"
          >
            <span className='tracking-tighter'>Enterprise-grade{' '}</span> 
            <span style={{ color: 'hsl(221, 70%, 50%)' }} className="600 leading-[1.2] tracking-tighter">Generative AI</span>{' '}
            <span className='tracking-tighter'>Deployed on Your Cloud</span> 
          </motion.h1>

          <motion.p 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg md:text-xl mb-8 max-w-xl leading-[1.2] text-dark-500  tracking-normal"
          >
            Experience secure, scalable AI tailored for your enterprise needs. Holbox empowers you to build, deploy, and manage generative AI models right within your own infrastructure.
          </motion.p>

          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="https://www.holbox.ai/solutions"
              className="flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: 'hsl(221, 70%, 50%)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(221, 70%, 40%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(221, 70%, 50%)';
              }}
            >
              See Our Solution
              <ChevronRight size={18} className="ml-1" />
            </a>

            <a 
              href="https://www.holbox.ai/contact"
              className="flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              style={{
                border: '2px solid hsl(221, 50%, 70%)',
                color: 'hsl(221, 30%, 30%)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(221, 50%, 50%)';
                e.currentTarget.style.color = 'hsl(221, 50%, 50%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'hsl(221, 50%, 70%)';
                e.currentTarget.style.color = 'hsl(221, 30%, 30%)';
              }}
            >
              Talk to Sales
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[500px] h-[500px] relative flex items-center justify-center">
            <img 
              src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b16076a61ec89c6543f_main-bg-p-800.png" 
              alt="AI Illustration" 
            />
          </div>
        </motion.div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-0"
        style={{
          background: 'linear-gradient(to top, white 0%, transparent 100%)'
        }}
      ></div>
    </section>
  </div>
);
};