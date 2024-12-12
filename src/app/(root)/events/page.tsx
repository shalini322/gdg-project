'use client';

import React, { useState, useEffect, useRef } from 'react';
import EventSection from '@/app/(root)/events/components/EventSection';
import { gsap } from 'gsap';
import { EventType, EventCategory } from '@/app/(root)/events/types';
import Navbar from '@/components/Navbar';

const staticEvents: EventType[] = [
  {
    id: '1',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '11',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },
  
  {
    id: '10',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '9',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '8',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '7',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '6',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '5',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '4',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '3',
    title: 'Google I/O Extended 2024',
    description: 'Join us for the local Google I/O Extended event',
    date: '2024-07-15',
    location: 'Tech Hub, City Center',
    category: 'upcoming',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://example.com/register'
  },

  {
    id: '2',
    title: 'Ui Ux BootCamp',
    description: 'Annual winter hackathon for developers',
    date: '2024-01-20',
    location: 'Online Event',
    category: 'past',
    imageUrl: '/img/events/image.png',
    registrationLink: 'https://gdg.community.dev/events/details/google-gdg-on-campus-bengal-institute-of-technology-kolkata-india-presents-uiux-bootcamp-day-1/cohost-gdg-on-campus-haldia-institute-of-technology-haldia-india'
  }
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('upcoming');
  const pageRef = useRef(null);
  const headingRef = useRef(null);
  const categoryToggleRef = useRef(null);

  const filteredEvents = staticEvents.filter(event => event.category === activeCategory);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
    }

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
    <div className="relative min-h-screen bg-white dark:bg-black" ref={pageRef}>
      {/* Background container */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.05]" />
          <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.05]" />
        </div>

        {/* Decorative Elements related to development */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Code and development themed icons */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-300 to-blue-500/[0.02] rounded-full blur-xl" />
          <div className="absolute top-40 right-10 w-40 h-40 bg-gradient-to-r from-blue-600 to-yellow-500/[0.05] rounded-full blur-xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-500/[0.03] rounded-full blur-xl" />
          <div className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-r from-yellow-500 to-red-500/[0.03] rounded-full blur-xl" />

          {/* 3D shapes like "containers" */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white/[0.1] shadow-2xl rounded-xl transform rotate-12 -z-10" />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-white/[0.1] shadow-2xl rounded-xl transform rotate-12 -z-10" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative isolate">
        <Navbar />
        <main className="relative max-w-7xl mx-auto p-6 md:p-10">
          <h1
            ref={headingRef}
            className="text-5xl py-10 font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-red-500"
          >
            Google Developer Group Events
          </h1>

          <div
            ref={categoryToggleRef}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800/50 p-1 shadow-lg backdrop-blur-sm">
              {(['upcoming', 'past'] as EventCategory[]).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
                </button>
              ))}
            </div>
          </div>

          <EventSection
            events={filteredEvents}
            category={activeCategory}
          />
        </main>
      </div>
    </div>
  );
}
