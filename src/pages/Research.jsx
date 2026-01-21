// src/pages/Home.jsx
import { Link } from "react-router-dom";
import './AcademicWebsite.css';

function Research() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
      <main className="space-y-12">
        <section id="research">
          <p>
          Large-scale metal additive manufacturing processes—such as Directed Energy Deposition (DED)—are increasingly used in industries like aerospace, construction, shipbuilding, and automotive. 
          These technologies enable the production of complex, lightweight, high-performance components with reduced lead times and material costs. 
          However, the fabrication process involves varying temperature conditions that can affect mechanical performance, while the structural design itself can influence these thermal changes. 
          My research investigates this dynamic interplay between structural design, manufacturing processes, and mechanical properties. 
          Using finite element methods, I analyze how these factors interact, and apply the insights to optimize both structural designs and fabrication strategies tailored for metal additive manufacturing.
          </p>
          <div className="gallery">
            <img src={`${process.env.PUBLIC_URL}/images/work.jpg`} alt="workflow" />
          </div>
          
        </section>
      </main>

      <footer className="mt-12 text-sm text-center text-gray-500 border-t pt-6">
        &copy; 2025 Dr. ir. Vibhas Mishra
      </footer>
    </div>
  );
}

export default Research;
