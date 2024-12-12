"use client";
import React, { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

// User interface for type safety
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<Partial<User>>({});

  const handleAddUser = () => {
    setCurrentUser({});
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSaveUser = () => {
    if (currentUser.id) {
      // Edit existing user
      setUsers(users.map(user => 
        user.id === currentUser.id ? currentUser as User : user
      ));
    } else {
      // Add new user
      const newUser = {
        ...currentUser,
        id: Math.random().toString(36).substr(2, 9)
      } as User;
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-darkgray">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">User Management</h1>
        <button 
          onClick={handleAddUser}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="mr-2" /> Add User
        </button>
      </div>

      {/* User List */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-darkgray shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left text-gray-600 dark:text-gray-300">Name</th>
              <th className="p-3 text-left text-gray-600 dark:text-gray-300">Email</th>
              <th className="p-3 text-left text-gray-600 dark:text-gray-300">Role</th>
              <th className="p-3 text-right text-gray-600 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr 
                key={user.id} 
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-3 text-gray-800 dark:text-gray-200">{user.name}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">{user.email}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">{user.role}</td>
                <td className="p-3 flex justify-end space-x-2">
                  <button 
                    onClick={() => handleEditUser(user)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => handleDeleteUser(user.id)}
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

      {/* User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkgray rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {currentUser.id ? 'Edit User' : 'Add User'}
            </h2>
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Name"
                value={currentUser.name || ''}
                onChange={(e) => setCurrentUser({...currentUser, name: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
              <input 
                type="email"
                placeholder="Email"
                value={currentUser.email || ''}
                onChange={(e) => setCurrentUser({...currentUser, email: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
              <select 
                value={currentUser.role || ''}
                onChange={(e) => setCurrentUser({...currentUser, role: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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

export default UserManagement;