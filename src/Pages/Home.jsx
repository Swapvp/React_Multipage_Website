import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
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
      <Services />
      <Contact />
    </>
  );
};

export default Home;
