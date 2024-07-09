import React from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";

const About = () => {
  // const data = {
  //   name: "Swapnesh V Pawar",
  //   image: "./images/about1.svg",
  // };

  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return (
    <>
      <HeroSection />
    </>
  );
};

export default About;
