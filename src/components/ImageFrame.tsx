"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "classnames";
import { gsap } from "gsap";

interface ImageFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  name: string;
  role: string;
  borderColor?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const ImageFrame: React.FC<ImageFrameProps> = ({
  imageSrc,
  name,
  role,
  borderColor = "#79F77D",
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...rest
}) => {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    // GSAP hover animation setup
    const tl = gsap.timeline({ paused: true });
    
    tl.to(frame, {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out"
    });

    // Hover event handlers
    const handleMouseEnter = () => {
      tl.play();
      
      const otherFrames = document.querySelectorAll('.image-frame:not(:hover)');
      gsap.to(otherFrames, {
        filter: 'blur(3px) brightness(0.7)',
        duration: 0.3,
        ease: "power2.out"
      });

      onMouseEnter?.();
    };

    const handleMouseLeave = () => {
      tl.reverse();
      
      const otherFrames = document.querySelectorAll('.image-frame');
      gsap.to(otherFrames, {
        filter: 'blur(0px) brightness(1)',
        duration: 0.3,
        ease: "power2.out"
      });

      onMouseLeave?.();
    };

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      onClick?.();
    };

    // Add event listeners
    frame.addEventListener('mouseenter', handleMouseEnter);
    frame.addEventListener('mouseleave', handleMouseLeave);
    frame.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      frame.removeEventListener('mouseenter', handleMouseEnter);
      frame.removeEventListener('mouseleave', handleMouseLeave);
      frame.removeEventListener('click', handleClick);
    };
  }, [onMouseEnter, onMouseLeave, onClick]);

  function getContrastYIQ(hexcolor: string) {
    hexcolor = hexcolor.replace("#", "");
    
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    
    return yiq >= 128 ? "black" : "white";
  }

  return (
    <div
      ref={frameRef}
      {...rest}
      className={clsx(
        "image-frame relative flex flex-col items-center border-8 w-52 border-x-[10px] transition-transform duration-300 cursor-pointer",
        rest.className
      )}
      style={{
        borderColor: borderColor,
        boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-lg -mt-10 h-56">
        <Image
          src={imageSrc}
          alt={name}
          className="w-full object-cover"
          width={4000}
          height={200}
        />
      </div>
      
      {/* Text */}
      <div
        className={clsx(
          "text-center text-black px-4 w-full h-24 pt-4", 
          rest.className
        )}
        style={{
          backgroundColor: borderColor,
          color: getContrastYIQ(borderColor),
        }}
      >
        <h3 className="text-md font-bold text-black">{name}</h3>
        <p className="text-sm uppercase opacity-80 text-black">{role}</p>
      </div>
    </div>
  );
};

export default ImageFrame;