// src/pages/Home.jsx
import { Link } from "react-router-dom";
import './AcademicWebsite.css';

function About() {
  return (
    <><div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-1">Dr. ir. Vibhas Mishra</h1>
        <p className="text-lg text-gray-700">Researcher, Delft University of Technology, The Netherlands</p>
      </header>
    </div>
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
        <main className="space-y-12">
          <section id="about">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <p align="justify">
                I’m a researcher specializing in developing solutions for large-scale metal additive manufacturing processes.
                With a background in mechanics and materials science, my work focuses on optimizing structural design and fabrication strategies to enhance mechanical performance and production efficiency.
                Beyond my research, I’m passionate about exploring ideas and experiences that fuel my curiosity and creativity.
                I enjoy playing online chess, traveling, and learning new languages—currently, I’m working on my Dutch.
                I also have a deep interest in history, love reading books across genres, and enjoy watching a wide range of films.
                These interests help me stay engaged, open-minded, and continuously inspired, both inside and outside the lab.
              </p>
              <div className="image-grid">
              <img src={`${process.env.PUBLIC_URL}/images/defence.jpeg`} alt="In the lab" />
              <img src={`${process.env.PUBLIC_URL}/images/degree.jpeg`} alt="Playing chess" />
              <img src={`${process.env.PUBLIC_URL}/images/wheel.jpg`} alt="Traveling" />
              <img src={`${process.env.PUBLIC_URL}/images/canon.jpeg`} alt="dutch" />
              <img src={`${process.env.PUBLIC_URL}/images/chess.jpg`} alt="Chess" />
              <img src={`${process.env.PUBLIC_URL}/images/book3body.jpg`} alt="book" />
            </div>
            </div>
          </section>
        </main>

        <footer className="mt-12 text-sm text-center text-gray-500 border-t pt-6">
          &copy; 2025 Dr. ir. Vibhas Mishra
        </footer>
      </div></>
  );
}

export default About;
