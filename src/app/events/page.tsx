'use client';

import React, { useState, useEffect, useRef } from 'react';
import EventSection from '@/app/events/components/EventSection';
import { gsap } from 'gsap';
import { EventType, EventCategory } from '@/app/events/types';
import Navbar from '@/components/Navbar'

// Static events data (to be replaced with backend integration)
const staticEvents: EventType[] = [
  {
    id: '1',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/images/events/io-extended.jpg',
    registrationLink: 'https://example.com/register'
  },
  {
    id: '2',
    title: 'DevFest Winter Hackathon',
    description: 'Annual winter hackathon for developers',
    date: '2024-01-20',
    location: 'Online Event',
    category: 'past',
    imageUrl: '/images/events/hackathon.jpg',
    registrationLink: 'https://example.com/past-event'
  },
  // Add more events as needed
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('upcoming');
  const headingRef = useRef(null);
  const categoryToggleRef = useRef(null);

  const filteredEvents = staticEvents.filter(event => event.category === activeCategory);

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate heading
    if (headingRef.current) {
      tl.fromTo(
        headingRef.current, 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 0.8 }
      );
    }

    // Animate category toggle
    if (categoryToggleRef.current) {
      tl.fromTo(
        categoryToggleRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.4'
      );
    }
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-darkgray p-6 md:p-10">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 
          ref={headingRef}
          className="text-4xl py-10 font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
        >
          Google Developer Group Events
        </h1>

        {/* Category Toggle */}
        <div 
          ref={categoryToggleRef}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex rounded-lg bg-gray-200 dark:bg-gray-700 p-1">
            {(['upcoming', 'past'] as EventCategory[]).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
              </button>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <EventSection 
          events={filteredEvents}
          category={activeCategory}
        />
      </div>
    </div>
  );
}