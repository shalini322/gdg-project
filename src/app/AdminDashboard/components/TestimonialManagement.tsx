"use client";
import React, { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

// User interface for type safety
interface Testimonial {
  id: string;
  name: string;
  company: string;
  testimonial: string;
  rating: number;
}

const TestimonialManagement: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    { 
      id: '1', 
      name: 'John Smith', 
      company: 'Tech Innovations Inc.', 
      testimonial: 'Amazing service that exceeded our expectations!', 
      rating: 5 
    },
    { 
      id: '2', 
      name: 'Emily Johnson', 
      company: 'Global Solutions', 
      testimonial: 'Professional, reliable, and incredibly supportive team.', 
      rating: 4 
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Partial<Testimonial>>({});

  const handleAddTestimonial = () => {
    setCurrentTestimonial({});
    setIsModalOpen(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleDeleteTestimonial = (testimonialId: string) => {
    setTestimonials(testimonials.filter(testimonial => testimonial.id !== testimonialId));
  };

  const handleSaveTestimonial = () => {
    if (currentTestimonial.id) {
      // Edit existing testimonial
      setTestimonials(testimonials.map(testimonial => 
        testimonial.id === currentTestimonial.id ? currentTestimonial as Testimonial : testimonial
      ));
    } else {
      // Add new testimonial
      const newTestimonial = {
        ...currentTestimonial,
        id: Math.random().toString(36).substr(2, 9)
      } as Testimonial;
      setTestimonials([...testimonials, newTestimonial]);
    }
    setIsModalOpen(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="p-6 bg-white dark:bg-darkgray">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Testimonial Management</h1>
        <button 
          onClick={handleAddTestimonial}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="mr-2" /> Add Testimonial
        </button>
      </div>

      {/* Testimonial List */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-darkgray shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left text-gray-600 dark:text-gray-300">Name</th>
              <th className="p-3 text-left text-gray-600 dark:text-gray-300">Company</th>
              <th className="p-3 text-left text-gray-600 dark:text-gray-300">Testimonial</th>
              <th className="p-3 text-left text-gray-600 dark:text-gray-300">Rating</th>
              <th className="p-3 text-right text-gray-600 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr 
                key={testimonial.id} 
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-3 text-gray-800 dark:text-gray-200">{testimonial.name}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">{testimonial.company}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400 max-w-xs truncate">
                  {testimonial.testimonial}
                </td>
                <td className="p-3">
                  {renderStars(testimonial.rating)}
                </td>
                <td className="p-3 flex justify-end space-x-2">
                  <button 
                    onClick={() => handleEditTestimonial(testimonial)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Testimonial Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkgray rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {currentTestimonial.id ? 'Edit Testimonial' : 'Add Testimonial'}
            </h2>
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Name"
                value={currentTestimonial.name || ''}
                onChange={(e) => setCurrentTestimonial({...currentTestimonial, name: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
              <input 
                type="text"
                placeholder="Company"
                value={currentTestimonial.company || ''}
                onChange={(e) => setCurrentTestimonial({...currentTestimonial, company: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
              <textarea
                placeholder="Testimonial"
                value={currentTestimonial.testimonial || ''}
                onChange={(e) => setCurrentTestimonial({...currentTestimonial, testimonial: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 h-24"
              />
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 dark:text-gray-300">Rating:</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setCurrentTestimonial({...currentTestimonial, rating: star})}
                      className={`text-2xl ${(currentTestimonial.rating || 0) >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveTestimonial}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={!currentTestimonial.name || !currentTestimonial.testimonial}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialManagement;