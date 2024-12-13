"use client";

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles ,
  Settings,
  Menu
} from 'lucide-react';
import Sidebar from '@/app/AdminDashboard/components/Sidebar';
import UserManagement from '@/app/AdminDashboard/components/UserManagement';
import EventManagement from '@/app/AdminDashboard/components/EventManagement';
import TestimonialManagement from '@/app/AdminDashboard/components/TestimonialManagement';

import DashboardHome from '@/app/AdminDashboard/components/DashboardHome';
import Navbar from '@/components/Navbar';

// Enum for dashboard sections
export enum DashboardSection {
  HOME = 'Home',
  USERS = 'Users',
  EVENTS = 'Events',
  TESTIMONIALS = 'Testimonials',
  SETTINGS = 'Settings'
}

// Main dashboard navigation items
export const DASHBOARD_NAV_ITEMS = [
  {
    section: DashboardSection.HOME,
    icon: LayoutDashboard
  },
  {
    section: DashboardSection.USERS,
    icon: Users
  },
  {
    section: DashboardSection.EVENTS,
    icon: Calendar
  },

  {
    section: DashboardSection.TESTIMONIALS,
    icon: Sparkles
  },
  
  {
    section: DashboardSection.SETTINGS,
    icon: Settings
  }
];

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DashboardSection>(DashboardSection.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Render active section component
  const renderActiveSection = () => {
    switch (activeSection) {
      case DashboardSection.HOME:
        return <DashboardHome />;
      case DashboardSection.USERS:
        return <UserManagement />;
      case DashboardSection.EVENTS:
        return <EventManagement />;
        case DashboardSection.TESTIMONIALS:
          return <TestimonialManagement />;
      case DashboardSection.SETTINGS:
        return <div>Settings Page</div>;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen py-10 bg-white dark:bg-darkgray">
      <Navbar />
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <main className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out 
        ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Navigation */}
        <nav className="sticky top-0 z-40 py-10 flex items-center justify-between p-4 bg-white dark:bg-darkgray shadow-sm">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu />
          </button>
          {/* Add user profile, notifications, etc. here */}
        </nav>

        {/* Dynamic Content Rendering */}
        <div className="p-6">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;