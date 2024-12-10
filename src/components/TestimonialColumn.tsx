"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
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
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const column = columnRef.current;
    if (!column) return;

    const setupAnimation = () => {
      // Double the cards for smooth infinite scroll
      [...Array(2)].forEach(() => {
        testimonials.forEach(() => {
          const clone = column.children[0].cloneNode(true) as HTMLElement;
          column.appendChild(clone);
        });
      });

      const speed = isMobile
        ? 20
        : columnIndex === 0
        ? 15
        : columnIndex === 1
        ? 18
        : 13;

      const totalHeight =
        column.children[0].getBoundingClientRect().height * testimonials.length;

      gsap.to(column, {
        y: -totalHeight,
        duration: speed,
        ease: "none",
        repeat: -1,
        repeatRefresh: true,
      });
    };

    if (!isMobile || columnIndex === 0) {
      setupAnimation();
    }

    return () => {
      gsap.killTweensOf(column);
    };
  }, [columnIndex, isMobile, testimonials]);

  return (
    <div
      ref={columnRef}
      className={`
        flex 
        flex-col 
        space-y-4 
        md:space-y-6
        ${columnIndex > 0 ? "hidden md:flex" : "flex"}
      `}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`${testimonial.id}-${index}`}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
};
