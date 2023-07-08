import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const initialLoginHandler = async () => {
      try {
        const res = await axios.get(`/api/users`);
        const userInDatabase = res.data.users.find(
          ({ username }) => username === currentUser.username
        );
        if (userInDatabase) {
          setLoggedIn(true);
          setUser(() => userInDatabase);
        }
      } catch (e) {
        console.error(e.message);
      }
    };
    if (currentUser) {
      initialLoginHandler();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
