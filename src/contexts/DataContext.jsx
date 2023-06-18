import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "../reducers/dataReducer";
import { getAllUsers } from "../utilities/userUtilities";
import { getAllPosts } from "../utilities/postsUtilities";
import { AuthContext } from "./AuthContext";
import { getAllBookmarks } from "../utilities/bookmarkUtilities";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    posts: [],
    users: [],
    bookmarks: [],
  });

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log("data");
    getAllPosts(dataDispatch);
    getAllUsers(dataDispatch);
    if (loggedIn) {
      getAllBookmarks(dataDispatch);
    }
  }, [loggedIn]);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
}
