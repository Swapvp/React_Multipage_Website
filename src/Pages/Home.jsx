import React from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";

const Home = () => {
  // const data = {
  //   name: "Swapnesh  Pawar",
  //   image: "./images/hero.svg",
  // };

  const { updateHomePage } = useGlobalContext();
  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
