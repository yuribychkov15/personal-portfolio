import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectGrid from "./components/ProjectGrid";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <ProjectGrid />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
