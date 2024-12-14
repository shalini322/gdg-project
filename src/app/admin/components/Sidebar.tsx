"use client";
import React from "react";
import {
  DashboardSection,
  DASHBOARD_NAV_ITEMS,
} from "@/app/admin/components/AdminDashboard";

interface SidebarProps {
  activeSection: DashboardSection;
  setActiveSection: (section: DashboardSection) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  isSidebarOpen,
}) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white dark:bg-darkgray border-r dark:border-gray-800          
      shadow-lg transition-all duration-300 ease-in-out z-50         
      ${isSidebarOpen ? "w-64" : "w-20"}`}
    >
      <div className="flex flex-col h-full">
        {/* Logo Area */}
        <div
          className={`flex items-center p-4 border-b dark:border-gray-800            
          ${isSidebarOpen ? "justify-between" : "justify-center"}`}
        >
          {isSidebarOpen && (
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Admin Panel
            </span>
          )}
        </div>
        {/* Navigation Items */}
        <nav className="flex-1 py-4">
          <ul>
            {DASHBOARD_NAV_ITEMS.map(({ section, icon: Icon }) => (
              <li
                key={section}
                className={`                   
                  cursor-pointer group relative                    
                  ${
                    activeSection === section
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }                    
                  transition-colors duration-200 ease-in-out                 
                `}
              >
                <div
                  onClick={() => setActiveSection(section)}
                  className="flex items-center p-4"
                >
                  <Icon
                    className={`                       
                      ${
                        activeSection === section
                          ? "text-blue-600"
                          : "text-gray-600 dark:text-gray-400"
                      }                        
                      group-hover:text-blue-500                     
                    `}
                  />
                  {isSidebarOpen && (
                    <span
                      className={`ml-4                          
                        ${
                          activeSection === section
                            ? "text-blue-600 font-semibold"
                            : "text-gray-800 dark:text-gray-200"
                        }                       
                      `}
                    >
                      {section}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
