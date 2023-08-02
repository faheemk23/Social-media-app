import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [mode, setMode] = useState("light");
  const [authLoading, setAuthLoading] = useState(true);

  // handling login when hard refresh

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const mode = localStorage.getItem("mode");

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
      } finally {
        setAuthLoading(false);
      }
    };
    if (currentUser) {
      initialLoginHandler();
    } else {
      setAuthLoading(false);
    }

    if (mode) {
      setMode(mode);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        mode,
        setMode,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
