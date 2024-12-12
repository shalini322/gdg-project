"use client";
import React, { useState } from 'react';
import { Edit, Trash2, Plus, Calendar as CalendarIcon } from 'lucide-react';

// Event interface for type safety
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
}

const EventManagement: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    { 
      id: '1', 
      title: 'Annual Tech Conference', 
      description: 'A gathering of tech enthusiasts and professionals',
      date: '2024-08-15',
      location: 'Tech Hub Convention Center',
      participants: 250
    },
    { 
      id: '2', 
      title: 'Startup Pitch Competition', 
      description: 'Local startups showcase their innovative ideas',
      date: '2024-09-20',
      location: 'Innovation Center',
      participants: 75
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<Event>>({});

  const handleAddEvent = () => {
    setCurrentEvent({});
    setIsModalOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setCurrentEvent(event);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const handleSaveEvent = () => {
    if (currentEvent.id) {
      // Edit existing event
      setEvents(events.map(event => 
        event.id === currentEvent.id ? currentEvent as Event : event
      ));
    } else {
      // Add new event
      const newEvent = {
        ...currentEvent,
        id: Math.random().toString(36).substr(2, 9),
        participants: currentEvent.participants || 0
      } as Event;
      setEvents([...events, newEvent]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-darkgray">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Event Management</h1>
        <button 
          onClick={handleAddEvent}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="mr-2" /> Create Event
        </button>
      </div>

      {/* Event List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {event.title}
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditEvent(event)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => handleDeleteEvent(event.id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {event.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Date:</span>
                  <span className="text-gray-600 dark:text-gray-400">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Participants:</span>
                  <span className="text-gray-600 dark:text-gray-400">{event.participants}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkgray rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {currentEvent.id ? 'Edit Event' : 'Create Event'}
            </h2>
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Event Title"
                value={currentEvent.title || ''}
                onChange={(e) => setCurrentEvent({...currentEvent, title: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
              <textarea 
                placeholder="Event Description"
                value={currentEvent.description || ''}
                onChange={(e) => setCurrentEvent({...currentEvent, description: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                rows={3}
              />
              <input 
                type="date"
                value={currentEvent.date || ''}
                onChange={(e) => setCurrentEvent({...currentEvent, date: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
              <input 
                type="text"
                placeholder="Location"
                value={currentEvent.location || ''}
                onChange={(e) => setCurrentEvent({...currentEvent, location: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
              <input 
                type="number"
                placeholder="Number of Participants"
                value={currentEvent.participants || ''}
                onChange={(e) => setCurrentEvent({...currentEvent, participants: parseInt(e.target.value)})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveEvent}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventManagement;