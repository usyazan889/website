import React from 'react';
import { Settings } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminPanel = () => {
  const { isAdmin } = useAdmin();

  if (!isAdmin) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
};

// Admin Access Button - only visible when not logged in
export const AdminAccessButton = () => {
  const { isAdmin } = useAdmin();
  const [showLogin, setShowLogin] = React.useState(false);

  if (isAdmin) return null;

  return (
    <>
      <button
        onClick={() => setShowLogin(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200 z-40"
        title="دخول المدير"
      >
        <Settings className="h-5 w-5" />
      </button>
      
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
            >
              ×
            </button>
            <AdminLogin />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;