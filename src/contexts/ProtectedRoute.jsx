import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ roles, children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (roles && !roles.includes(user.role)) {
      navigate('/');
    }
  }, [user, roles, navigate]);

  if (!user || (roles && !roles.includes(user.role))) {
    return null; // You could add a loading spinner or placeholder here if needed
  }

  return children;
};

export default ProtectedRoute;
