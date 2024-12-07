"use client";

import React from 'react';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = '' }) => (
  <div 
    className={`
      ${className} 
      testimonial-card 
      bg-white dark:bg-[#2e2e2e]
      backdrop-blur-lg 
      border 
      border-gray-200 dark:border-gray-700
      rounded-xl 
      shadow-md
      dark:shadow-xl 
      p-4 md:p-6 
      mb-4 md:mb-6 
      transform 
      motion-safe:transition-all
      motion-safe:duration-700
      hover:shadow-xl
      hover:bg-gray-50 dark:hover:bg-[#363636]
      relative
      z-0
      h-fit
      opacity-100
      w-full
      max-w-md
      mx-auto
      md:max-w-none
    `}
  >
    <div className="flex items-center mb-3 md:mb-4">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 flex-shrink-0"
      />
      <div>
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
          {testimonial.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
          {testimonial.role}
        </p>
      </div>
    </div>
    <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 italic">
      {testimonial.text}
    </p>
  </div>
);