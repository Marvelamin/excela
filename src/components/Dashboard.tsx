import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import ExcelProcessor from './ExcelProcessor';
import UserManagement from './UserManagement';
import { ExcelData } from '../types';
import { LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [mainExcel, setMainExcel] = React.useState<ExcelData[]>([]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Hoş Geldiniz, {user?.username}</h1>
            <p className="text-gray-600">Rol: {user?.role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Çıkış Yap
          </button>
        </div>

        <ExcelProcessor mainExcel={mainExcel} setMainExcel={setMainExcel} />
        
        {user?.role === 'admin' && <UserManagement />}
      </div>
    </div>
  );
};

export default Dashboard;