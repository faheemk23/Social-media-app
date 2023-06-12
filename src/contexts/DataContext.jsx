import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "../reducers/dataReducer";
import { getAllUsers } from "../utilities/userUtilities";
import { getAllPosts } from "../utilities/postsUtilities";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    posts: [],
    users: [],
  });

  useEffect(() => {
    console.log("render public");
    getAllPosts(dataDispatch);
    getAllUsers(dataDispatch);
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
}
