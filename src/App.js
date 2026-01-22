import React from "react";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StressBasedScrollStory from "./pages/story1";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import story1 from "./pages/story1";
import PortfolioHighlights from "./pages/highlights";
import ResearchCarousel from "./pages/ResearchCarousel";
import { HashRouter } from "react-router-dom";

function App() {
  
  useEffect(() => {
    document.title = "Vibhas Mishra";
  }, []);

  return (
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/Highlights" element={< PortfolioHighlights/>} />
        <Route path="/Publications/story1" element={<StressBasedScrollStory />} />
        <Route path="/Teaching" element={<Teaching />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Carousel" element={<ResearchCarousel />} />
      </Routes>
    </HashRouter>


  );
};

export default App;
