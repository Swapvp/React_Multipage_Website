import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Swapnesh">{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
