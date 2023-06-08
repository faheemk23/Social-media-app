import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "../reducers/dataReducer";
import { followUser } from "../utilities/userUtilities";
import { getAllPosts } from "../utilities/postsUtilities";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    posts: [],
    bookmarks: [],
    users: [],
  });

  useEffect(() => {
    console.log("render");
    followUser("054c1f2b-dcf8-44ui44-5555-820d4afc", dataDispatch);
    followUser("054c1f2b-dcf8-439b-86e7-820d4ac416fc", dataDispatch);
    getAllPosts(dataDispatch);
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
}
