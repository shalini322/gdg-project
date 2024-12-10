"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialColumnProps {
  testimonials: Testimonial[];
  columnIndex: number;
  isMobile: boolean;
}

export const TestimonialColumn: React.FC<TestimonialColumnProps> = ({
  testimonials,
  columnIndex,
  isMobile,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate speed based on column index and mobile status
  const speed = isMobile
    ? 20
    : columnIndex === 0
    ? 15
    : columnIndex === 1
    ? 18
    : 13;

  // Determine if animation should be applied
  const shouldAnimate = !isMobile || columnIndex === 0;

  return (
    <div
      ref={containerRef}
      className={`
        flex 
        flex-col 
        space-y-4 
        md:space-y-6
        ${columnIndex > 0 ? "hidden md:flex" : "flex"}
      `}
    >
      {shouldAnimate ? (
        <motion.div
          animate={{
            y: `-100%`, 
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem", 
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            )
          )}
        </motion.div>
      ) : (
        testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))
      )}
    </div>
  );
};
