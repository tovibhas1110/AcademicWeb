// src/pages/Home.jsx
import { Link } from "react-router-dom";
import './AcademicWebsite.css';

function Teaching() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
      <main className="space-y-12">
        <section id="teaching">
          <h3 className="text-xl font-semibold mb-2 border-b pb-1"><strong>Teaching Assistance</strong></h3>
          <ul className="list-disc list-inside space-y-4">
            <li>
              Non-Linear Mechanics (Code: ME46000)
            </li>
            <li>
              Engineering Optimization (Code: ME46060)
            </li>
            <li>
              Product Engineering (Code: IOB3-5-23)
            </li>
            <li>
              Advanced Embodiment Design (Code: ID 4175)
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 border-b pb-1"><strong>Mentored M.Sc. Theses</strong></h3>
          <ul className="list-disc list-inside space-y-4">
          <li>
              <em>Designing a socio-digital tool to drive the green bunkering transition (2025)</em> 
              <br />
              <strong>Link:</strong> <a href="https://repository.tudelft.nl/file/File_f4f113c6-3c7c-41fa-a6dc-cd6da4f20cad?preview=1" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Click here</a>
          </li>
          <li>
              <em>Cartridge+: concept design of a smart cartridge ecosystem for pharmaceutical 3D printing (2024)</em> 
              <br />
              <strong>Link:</strong> <a href="https://repository.tudelft.nl/file/File_2e157de5-9e02-4cee-bf24-053d7a4821ce?preview=1" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Click here</a>
          </li>
          <li>
              <em>Multi-axis wire arc additive manufacturing using optimized fabrication sequence (2024)</em> 
              <br />
              <strong>Link:</strong> <a href="https://repository.tudelft.nl/file/File_d8126d4c-976e-443e-9ebb-462236a814ed?preview=1" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Click here</a>
          </li>
          <li>
              <em>Predicting thermal history, microstructure and hardness of wire arc additive manufactured parts (2021)</em> 
              <br />
              <strong>Link:</strong> <a href="https://repository.tudelft.nl/file/File_d934b038-7a81-47f4-8494-3984c3beb712?preview=1" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Click here</a>
          </li>

          </ul>
          
        </section>
      </main>

      <footer className="mt-12 text-sm text-center text-gray-500 border-t pt-6">
        &copy; 2025 Dr. ir. Vibhas Mishra
      </footer>
    </div>
  );
}

export default Teaching;
