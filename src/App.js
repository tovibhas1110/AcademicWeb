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

function App() {
  
  useEffect(() => {
    document.title = "Vibhas Mishra";
  }, []);

  return (
    
    <BrowserRouter>
    
    <Navbar />
      <Routes>
        <Route path="/AcademicWeb/" element={<Home />} />
        <Route path="/AcademicWeb/About" element={<About />} />
        <Route path="/AcademicWeb/Research" element={<Research />} />
        <Route path="/AcademicWeb/Publications" element={<Publications />} />
        <Route path="/AcademicWeb/Highlights" element={< PortfolioHighlights/>} />
        <Route path="/AcademicWeb/Publications/story1" element={<StressBasedScrollStory />} />
        <Route path="/AcademicWeb/Teaching" element={<Teaching />} />
        <Route path="/AcademicWeb/Contact" element={<Contact />} />
        <Route path="/AcademicWeb/Carousel" element={<ResearchCarousel />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;
