import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUser(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
