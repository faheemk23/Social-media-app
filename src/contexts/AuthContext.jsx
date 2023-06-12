import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const { users } = useContext(DataContext);

  useEffect(() => {
    const currentUser = localStorage.getItem("userData");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
