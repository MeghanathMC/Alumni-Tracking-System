// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is logged in when the app loads
//     const userData = localStorage.getItem("user");
//     if (userData) {
//       setIsAuthenticated(true);
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const login = (userData) => {
//     setIsAuthenticated(true);
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//     navigate("/"); // Redirect to home page after login
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     localStorage.removeItem("user");
//     navigate("/login"); // Redirect to login page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
