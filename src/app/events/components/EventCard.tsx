'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { EventType, EventCategory } from '@/app/events/types';
import { Calendar, MapPin, Link } from 'lucide-react';

interface EventCardProps {
  event: EventType;
  category: EventCategory;
}

const EventCard: React.FC<EventCardProps> = ({ event, category }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Hover effect
    const hoverEnter = () => {
      gsap.to(card, {
        scale: 1.03,
        boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
        duration: 0.2,
        ease: 'power1.out'
      });
    };

    const hoverLeave = () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        duration: 0.2,
        ease: 'power1.out'
      });
    };

    card.addEventListener('mouseenter', hoverEnter);
    card.addEventListener('mouseleave', hoverLeave);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', hoverEnter);
      card.removeEventListener('mouseleave', hoverLeave);
    };
  }, []);

  // Format date
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                  transition-all duration-300 transform"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover absolute inset-0"
        />
        {category === 'past' && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg bg-red-500 px-3 py-1 rounded">
              Completed
            </span>
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4 text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <Calendar className="mr-2 w-5 h-5 text-blue-500" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 w-5 h-5 text-green-500" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-sm mb-4 text-gray-700 dark:text-gray-400 line-clamp-2">
          {event.description}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          {category === 'upcoming' && (
            <a 
              href={event.registrationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg 
                         hover:bg-blue-700 transition-colors duration-300"
            >
              <Link className="mr-2 w-4 h-4" />
              Register
            </a>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Event ID: {event.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;