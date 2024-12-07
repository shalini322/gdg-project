"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import ImageFrame from "@/components/ImageFrame";
import MaxWidthWrapper from "@/hooks/MaxWidthWrapper";
import ExpandedCard from "@/components/ExpandedCard";
import { memberCategories, categoryColors, Member } from "@/data/members";

// Member Category Component
const MemberCategory: React.FC<{ 
  category: string; 
  members: Member[]; 
  borderColor: string 
}> = ({ category, members, borderColor }) => {
  const [expandedMember, setExpandedMember] = useState<Member | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate category container and cards
    if (categoryRef.current) {
      gsap.fromTo(
        categoryRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }

    // Animate individual cards
    if (members && members.length > 0) {
      cardRefs.current = cardRefs.current.slice(0, members.length);
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out"
            }
          );
        }
      });
    }
  }, [members, category]);

  // If no members, show a message
  if (!members || members.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No members in this category.
      </div>
    );
  }

  return (
    <div ref={categoryRef} className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white text-gray-800">
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center px-4">
        {members.map((member, index) => (
          <div
            key={index}
            ref={(el) => {
              // Ensure we don't exceed the current members length
              if (index < members.length) {
                cardRefs.current[index] = el;
              }
            }}
            className="cursor-pointer group relative"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                duration: 0.3,
                ease: "power1.out"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: "none",
                duration: 0.3,
                ease: "power1.out"
              });
            }}
            onClick={(e) => {
              // Click animation and expand
              gsap.to(e.currentTarget, {
                scale: 0.95,
                duration: 0.1,
                onComplete: () => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.1 });
                  setExpandedMember(member);
                }
              });
            }}
          >
            <ImageFrame
              role={member.role}
              name={member.name}
              borderColor={borderColor}
              imageSrc={member.imageSrc}
              className="justify-self-center"
            />
          </div>
        ))}
      </div>

      {/* Expanded Card */}
      {expandedMember && (
        <ExpandedCard 
          member={expandedMember} 
          isOpen={!!expandedMember} 
          onClose={() => setExpandedMember(null)} 
        />
      )}
    </div>
  );
};

// Members Page
const MembersPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(memberCategories)[0]);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Animate category buttons
    const categories = Object.keys(memberCategories);
    categoryRefs.current = categoryRefs.current.slice(0, categories.length);
    
    categories.forEach((category, index) => {
      const button = categoryRefs.current[index];
      if (button) {
        gsap.fromTo(
          button,
          { opacity: 0, y: 20 },
          {
            opacity: 1, 
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out"
          }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-darkgray transition-colors duration-300">
      <Navbar />
      <MaxWidthWrapper>
        <div className="py-16">
          <h1 className="py-4 text-4xl sm:text-5xl text-center mb-12 font-bold dark:text-white text-gray-800">
            Our Amazing Team
          </h1>

          {/* Responsive Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
            {Object.keys(memberCategories).map((category, index) => (
              <button
                ref={(el) => {
                  // Ensure we don't exceed the current categories length
                  if (index < Object.keys(memberCategories).length) {
                    categoryRefs.current[index] = el;
                  }
                }}
                key={category}
                onClick={(e) => {
                  // Add click animation
                  gsap.to(e.currentTarget, {
                    scale: 0.95,
                    duration: 0.1,
                    onComplete: () => {
                      gsap.to(e.currentTarget, { scale: 1, duration: 0.1 });
                      setActiveCategory(category);
                    }
                  });
                }}
                className={`
                  px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-md font-semibold 
                  transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <MemberCategory 
            category={activeCategory} 
            members={memberCategories[activeCategory]} 
            borderColor={categoryColors[activeCategory as keyof typeof categoryColors]} 
          />
        </div>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};

export default MembersPage;