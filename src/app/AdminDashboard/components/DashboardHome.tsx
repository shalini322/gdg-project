"use client";

import React from 'react';
import { LayoutDashboard, Users, Calendar, Award, Settings } from 'lucide-react';
import { DashboardSection } from '@/app/AdminDashboard/components/AdminDashboard';

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${bgColor}`}>
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-white text-black">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardHome: React.FC = () => {
  const dashboardItems = [
    {
      icon: <LayoutDashboard size={24} />,
      title: DashboardSection.HOME,
      description: 'Overview of your dashboard.',
      bgColor: 'bg-blue-600',
    },
    {
      icon: <Users size={24} />,
      title: DashboardSection.USERS,
      description: 'Manage users and their roles.',
      bgColor: 'bg-green-600',
    },
    {
      icon: <Calendar size={24} />,
      title: DashboardSection.EVENTS,
      description: 'View and manage events.',
      bgColor: 'bg-yellow-600',
    },
    {
      icon: <Award size={24} />,
      title: DashboardSection.CERTIFICATES,
      description: 'Generate and manage certificates.',
      bgColor: 'bg-purple-600',
    },
    {
      icon: <Settings size={24} />,
      title: DashboardSection.SETTINGS,
      description: 'Customize your dashboard settings.',
      bgColor: 'bg-gray-600',
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Welcome to Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <DashboardCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
