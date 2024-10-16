import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  employee: {},
  attendance: {},
  dailyUpdates: [],
};

// Create context
const AppContext = createContext();

// Reducer function to manage state
const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE':
      return { ...state, employee: action.payload };
    case 'SET_ATTENDANCE':
      return { ...state, attendance: action.payload };
    case 'SET_DAILY_UPDATES':
      return { ...state, dailyUpdates: action.payload };
    default:
      return state;
  }
};

// Context Provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
