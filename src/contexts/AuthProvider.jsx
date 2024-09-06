import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({
  user: undefined,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    console.log(email, password);
    if (email.length !== 0) {
      try {
        const response = await axios.post(import.meta.env.VITE_API_URL + "api/auth/login/", {
          email, 
          password
        });
        localStorage.setItem(import.meta.env.VITE_JWT_HASH, response.data.token);
        setUser(response.data);
        window.location.href = `/u/${response.data.id}`;
      } catch (error) {
        console.error(error);
      }
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
