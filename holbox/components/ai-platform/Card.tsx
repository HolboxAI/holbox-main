'use client';

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.015,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
        borderColor: '#6366f1',
      }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="flex flex-col justify-between h-full rounded-2xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-200 text-left group"
    >

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
