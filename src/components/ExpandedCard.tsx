"use client";

import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { X, Github, Linkedin, Twitter } from 'lucide-react';

interface ExpandedCardProps {
  member: {
    name: string;
    role: string;
    imageSrc: string;
    borderColor: string;
    bio?: string;
    social?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
  onClose: () => void;
  isOpen: boolean;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ member, onClose, isOpen }) => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const nameRef = React.useRef<HTMLDivElement>(null);
  const socialContainerRef = React.useRef<HTMLDivElement>(null);
  const shineRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let nameAnimation: gsap.core.Tween | null = null;
    let socialAnimation: gsap.core.Tween | null = null;

    if (isOpen && nameRef.current && socialContainerRef.current) {
      // Create main timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // Overlay and blur animation
      tl.to(overlayRef.current, {
        opacity: 1,
        backdropFilter: 'blur(10px)',
        duration: 0.4
      });

      // Card entrance animation
      tl.fromTo(cardRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotateX: -20
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.6
        },
        "-=0.2"
      );

      // Image animation
      tl.fromTo(imageRef.current,
        {
          scale: 1.2,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8
        },
        "-=0.4"
      );

      // Content animation
      tl.fromTo(contentRef.current,
        {
          x: 20,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5
        },
        "-=0.6"
      );

      // Name shine effect - single animation
      nameAnimation = gsap.to(shineRef.current, {
        x: "200%",
        opacity: 0.5,
        duration: 1.5,
        ease: "power2.inOut"
      });

      // Social icons animation - single bounce
      const socialIcons = Array.from(socialContainerRef.current.children);
      socialAnimation = gsap.to(socialIcons, {
        y: -10,
        scale: 1.1,
        duration: 0.4,
        stagger: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    }

    return () => {
      if (nameAnimation) nameAnimation.kill();
      if (socialAnimation) socialAnimation.kill();
    };
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.in" },
      onComplete: onClose
    });

    if (socialContainerRef.current) {
      const socialIcons = socialContainerRef.current.children;
      tl.to(Array.from(socialIcons), {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3
      });
    }

    tl.to(contentRef.current, {
      x: 20,
      opacity: 0,
      duration: 0.3
    }, "-=0.2");

    tl.to(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3
    }, "-=0.2");

    tl.to(cardRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotateX: -20,
      duration: 0.4
    }, "-=0.2");

    tl.to(overlayRef.current, {
      opacity: 0,
      backdropFilter: 'blur(0px)',
      duration: 0.3
    }, "-=0.3");
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg opacity-0"
      onClick={handleClose}
    >
      <div 
        ref={cardRef}
        className="relative bg-white/90 dark:bg-darkgray/90 rounded-2xl max-w-3xl w-[90%] md:w-[700px] p-8 shadow-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
        style={{ perspective: "1000px" }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div ref={imageRef} className="w-full md:w-2/5">
            <div 
              className="relative w-full aspect-square rounded-xl overflow-hidden border-4 shadow-lg transform transition-transform duration-300 hover:scale-[1.02]" 
              style={{ borderColor: member.borderColor }}
            >
              <Image
                src={member.imageSrc}
                alt={member.name}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div ref={contentRef} className="w-full md:w-3/5">
            <div ref={nameRef} className="relative overflow-hidden">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h2>
              <div 
                ref={shineRef}
                className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent skew-x-12 opacity-0"
              />
            </div>
            
            <p className="text-lg text-blue-600 dark:text-blue-400 mt-2 font-medium">
              {member.role}
            </p>
            
            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {member.bio || "A passionate developer dedicated to creating innovative solutions and contributing to the tech community."}
            </p>

            <div ref={socialContainerRef} className="mt-8 flex gap-6">
              {member.social?.github && (
                <a 
                  href={member.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                >
                  <Github size={24} />
                </a>
              )}
              {member.social?.linkedin && (
                <a 
                  href={member.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {member.social?.twitter && (
                <a 
                  href={member.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                >
                  <Twitter size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCard;