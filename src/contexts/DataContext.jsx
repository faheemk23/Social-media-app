import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

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
  const [dataLoading, setDataLoading] = useState(true);

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    getAllPosts(dataDispatch);
    getAllUsers(dataDispatch, setDataLoading);
    if (loggedIn) {
      getAllBookmarks(dataDispatch);
    }
  }, [loggedIn]);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, dataLoading }}>
      {children}
    </DataContext.Provider>
  );
}
