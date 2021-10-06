/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';

const AppContext = createContext();

// eslint-disable-next-line arrow-body-style
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
