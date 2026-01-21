import React from "react";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StressBasedScrollStory from "./story1";
import About from "./Home";
import Navbar from "./Navbar";
import Research from "./Research";
import Teaching from "./Teaching";
import Publications from "./Publications";
import Contact from "./Contact";



function App() {
  
  useEffect(() => {
    document.title = "Vibhas Mishra";
  }, []);

  return (
    
    <BrowserRouter>
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
      <header className="mb-10">
      <h1 className="text-3xl font-bold mb-1">Dr. ir. Vibhas Mishra</h1>
      <p className="text-lg text-gray-700">Researcher, Delft University of Technology, The Netherlands</p>
      </header>
    </div>
    <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/Teaching" element={<Teaching />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;
