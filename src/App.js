import React from "react";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StressBasedScrollStory from "./story1";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Research from "./Research";
import Teaching from "./Teaching";
import Publications from "./Publications";
import Contact from "./Contact";
import story1 from "./story1"


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
        <Route path="/AcademicWeb/Publications/story1" element={<StressBasedScrollStory />} />
        <Route path="/AcademicWeb/Teaching" element={<Teaching />} />
        <Route path="/AcademicWeb/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;
