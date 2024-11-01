import React, { useState } from 'react';
import { UserPlus, Trash2, Users } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const UserManagement: React.FC = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { users, addUser, removeUser } = useAuthStore();

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({
      username: newUsername,
      password: newPassword,
      role: 'user',
    });
    setNewUsername('');
    setNewPassword('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Users className="w-6 h-6 mr-2 text-blue-500" />
        <h2 className="text-2xl font-bold">Kullanıcı Yönetimi</h2>
      </div>

      <form onSubmit={handleAddUser} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="Kullanıcı Adı"
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Şifre"
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Kullanıcı Ekle
        </button>
      </form>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border rounded"
          >
            <div>
              <p className="font-semibold">{user.username}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
            {user.role !== 'admin' && (
              <button
                onClick={() => removeUser(user.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;