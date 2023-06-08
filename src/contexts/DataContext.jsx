import { createContext, useReducer } from "react";
import { postsReducer } from "../reducers/postsReducer";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [postsState, postsDispatch] = useReducer(postsReducer, { posts: [] });

  return (
    <DataContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </DataContext.Provider>
  );
}
