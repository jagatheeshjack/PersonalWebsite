
import React from "react";
import TypingIntro from "../components/TypingIntro";
import Testimonials from "./Testimonials";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";



function Home() {
  return (
    <>
      <div className="intro">
        <h2>Jagatheesh K</h2>
        <TypingIntro />
      </div>
      <About />
      <Resume />
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonials />
      <Contact />
      
    </>
  );
}

export default Home;
