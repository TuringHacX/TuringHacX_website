import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CodeofConduct from "../components/CodeofConduct";
import About from "../components/About"
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <CodeofConduct />
      <Contact/>
      
    </>
  );
};

export default Homepage;
