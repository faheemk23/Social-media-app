import { createContext, useContext, useEffect, useReducer } from "react";

import { dataReducer } from "../reducers/dataReducer";
import { getAllBookmarks } from "../utilities/bookmarkUtilities";
import { getAllPosts } from "../utilities/postsUtilities";
import { getAllUsers } from "../utilities/userUtilities";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    posts: [],
    users: [],
    bookmarks: [],
  });

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
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
