import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user + token on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      axios.defaults.baseURL = "http://localhost:5000";
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login → Save session
  const login = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    axios.defaults.baseURL = "http://localhost:5000";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user);
    window.location.replace("/");
  };

  // Logout → Clear session
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    delete axios.defaults.headers.common["Authorization"];

    setUser(null);
    window.location.replace("/login");
  };

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
