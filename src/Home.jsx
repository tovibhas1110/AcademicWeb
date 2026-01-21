// src/pages/Home.jsx
import { Link } from "react-router-dom";
import './AcademicWebsite.css';

function Home() {
  return (
    
    
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
        <main className="space-y-12">
          <section id="about">
            <div className="image-grid">
              <img src={`${process.env.PUBLIC_URL}/images/defence.jpeg`} alt="In the lab" />
              <img src={`${process.env.PUBLIC_URL}/images/degree.jpeg`} alt="Playing chess" />
              <img src={`${process.env.PUBLIC_URL}/images/wheel.jpg`} alt="Traveling" />
              <img src={`${process.env.PUBLIC_URL}/images/canon.jpeg`} alt="dutch" />
              <img src={`${process.env.PUBLIC_URL}/images/chess.jpg`} alt="Chess" />
              <img src={`${process.env.PUBLIC_URL}/images/book3body.jpg`} alt="book" />
            </div>

          </section>
        </main>

        <footer className="mt-12 text-sm text-center text-gray-500 border-t pt-6">
          &copy; 2025 Dr. ir. Vibhas Mishra
        </footer>
      </div>
  );
}

export default Home;
