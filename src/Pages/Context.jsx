import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    name: "",
    image: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "Home_Update",
      payload: {
        name: "Swapnesh Pawar",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "About_Update",
      payload: {
        name: "Swapnesh V Pawar",
        image: "./images/hero.svg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
