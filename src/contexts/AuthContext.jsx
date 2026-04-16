import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const dummyUser = {
  id: "1",
  name: "Lakshya Sharma",
  headline: "Full Stack Developer",
  avatar: "https://i.pravatar.cc/150?img=1",
  connections: 312,
};

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to false to default to login page
  const [currentUser] = useState(dummyUser);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
