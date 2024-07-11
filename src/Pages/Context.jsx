import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const AppProvider = ({ children }) => {
  const initialState = {
    name: "",
    image: "",
    services: [],
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

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

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
