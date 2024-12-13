import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  UserPlus, 
  Activity 
} from 'lucide-react';

// Dummy data for initial implementation
const dummyData = {
  totalUsers: 1250,
  newUsers: 87,
  upcomingEvents: 12,
  activeMembers: 945,
  userGrowth: [
    { month: 'Jan', users: 800 },
    { month: 'Feb', users: 920 },
    { month: 'Mar', users: 1050 },
    { month: 'Apr', users: 1150 },
    { month: 'May', users: 1250 }
  ]
};

// Custom Bar Chart Component
const BarChart: React.FC<{ data: { month: string; users: number }[] }> = ({ data }) => {
  const maxUsers = Math.max(...data.map(item => item.users));
  
  return (
    <div className="flex items-center space-x-2 h-32">
      {data.map((item, index) => {
        const height = (item.users / maxUsers) * 100;
        return (
          <div key={index} className="flex flex-col items-center w-full">
            <div 
              className="bg-blue-500 dark:bg-blue-400 w-full transition-all duration-300 ease-in-out hover:opacity-80" 
              style={{ height: `${height}%` }}
            />
            <span className="text-xs text-gray-600 dark:text-gray-300 mt-1">{item.month}</span>
          </div>
        );
      })}
    </div>
  );
};

// Stat Card Component
const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: number;
  bgColor: string;
}> = ({ icon, title, value, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md flex items-center space-x-4 ${bgColor} text-white`}>
      <div className="p-3 rounded-full bg-white/20">
        {icon}
      </div>
      <div>
        <p className="text-sm opacity-75">{title}</p>
        <p className="text-2xl font-bold">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const [userData] = useState(dummyData);

  return (
    <div className="p-6 bg-gray-50 dark:bg-darkgray min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Admin Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={<Users className="w-6 h-6" />}
            title="Total Users"
            value={userData.totalUsers}
            bgColor="bg-blue-600 dark:bg-blue-700"
          />
          <StatCard 
            icon={<UserPlus className="w-6 h-6" />}
            title="New Users"
            value={userData.newUsers}
            bgColor="bg-green-600 dark:bg-green-700"
          />
          <StatCard 
            icon={<Calendar className="w-6 h-6" />}
            title="Upcoming Events"
            value={userData.upcomingEvents}
            bgColor="bg-yellow-600 dark:bg-yellow-700"
          />
          <StatCard 
            icon={<Activity className="w-6 h-6" />}
            title="Active Members"
            value={userData.activeMembers}
            bgColor="bg-purple-600 dark:bg-purple-700"
          />
        </div>

        {/* User Growth Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            User Growth Trend
          </h2>
          <div className="w-full">
            <BarChart data={userData.userGrowth} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;