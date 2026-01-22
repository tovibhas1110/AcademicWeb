// src/pages/Home.jsx
import { Link } from "react-router-dom";
import './AcademicWebsite.css';
import ResearchCarousel from "./ResearchCarousel";
function Home() {
  return (
    
    
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
        <main className="space-y-12">
          <section id="about">
            
          <ResearchCarousel />

          </section>
        </main>

        <footer className="mt-12 text-sm text-center text-gray-500 border-t pt-6">
          &copy; 2025 Dr. ir. Vibhas Mishra
        </footer>
      </div>
  );
}

export default Home;
