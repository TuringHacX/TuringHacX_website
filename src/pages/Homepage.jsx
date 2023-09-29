import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import CodeofConduct from "../components/Home/CodeofConduct";
import About from "../components/Home/About"
import Contact from "../components/Home/Contact";


const Homepage = () => {
  return (
    <div className="custom-background">
      <Navbar />
      <Hero />
      <About/>
      <CodeofConduct />
      <Contact/>
    </div>
  );
};

export default Homepage;
