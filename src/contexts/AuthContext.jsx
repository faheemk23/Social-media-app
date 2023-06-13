import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const initialLoginHandler = async () => {
      try {
        const res = await axios.get(`/api/users`);
        const userInDatabase = res.data.users.some(
          ({ username }) => username === currentUser.username
        );
        if (userInDatabase) {
          setLoggedIn(true);
          setUser(currentUser);
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
