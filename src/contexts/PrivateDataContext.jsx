import { createContext, useReducer } from "react";
import { dataReducer } from "../reducers/dataReducer";

export const PrivateDataContext = createContext();

export function PrivateDataProvider({ children }) {
  const [privateDataState, privateDataDispatch] = useReducer(dataReducer, {
    bookmarks: [],
  });

  return (
    <PrivateDataContext.Provider
      value={{ privateDataState, privateDataDispatch }}
    >
      {children}
    </PrivateDataContext.Provider>
  );
}
