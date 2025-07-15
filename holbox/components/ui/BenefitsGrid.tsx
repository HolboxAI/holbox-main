'use client';

import React from 'react';
import { FadeIn } from '../animations/fade-in';

interface Benefit {
  number: string;
  description: string;
  title?: string; // optional title if needed later
}

interface BenefitsGridProps {
  benefits: Benefit[];
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({ benefits }) => {
  return (
    <div className="px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <FadeIn
            key={benefit.number}
            direction="up"
            delay={0.2 + index * 0.1} // stagger animation
          >
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-8 h-full text-center">
              <h3 className="text-5xl font-bold text-blue-600 mb-4">
                {benefit.number}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default BenefitsGrid;
