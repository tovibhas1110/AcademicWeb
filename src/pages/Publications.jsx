// src/pages/Home.jsx
import { Link } from "react-router-dom";
import './AcademicWebsite.css';

function Publications() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
      <main className="space-y-12">
       
        <section id="publications">
          <h3 className="text-xl font-semibold mb-2 border-b pb-1"><strong>Journal Articles</strong></h3>
          <ul className="list-disc list-inside space-y-4">
            <li>
              Mishra, V., Ayas, C., Wu, J. (under preparation). <em>Fabrication Sequence Optimization for Multi-Axis Additive Manufacturing to Control Metal Material Microstructure</em>. 
            </li>
            <li>
              Mishra, V., Wu, J. (2026). <em>Differentiable Modelling and Optimization of Multi-Planar Slicing for Multi-Axis Additive Manufacturing</em>. Structural and Multidisciplinary Optimization, 69, 31.
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1007/s00158-025-04240-3" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s00158-025-04240-3</a>
            </li>
            <li>
              Rege R., Mellema T., Ramcharan A., Ait Hoummad A., Verhoeven S., Mishra V., Jansen A. J., Ouwerkerk N. & Shokri F. (2025). <em>3D Drug Printing by Semi-Solid Extrusion Through Reusable Cartridges: Usability Evaluation</em>. Journal of Pharmaceutical Innovation, 20, 21. 
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1007/s12247-024-09904-z" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s12247-024-09904-z</a>
            </li>
            <li>
              Mishra, V., Ayas, C., & Langelaar, M. (2023). <em>Design for material properties of additively manufactured metals using topology optimization</em>. Materials & Design, 235, 112388. 
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1016/j.matdes.2023.112388" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.matdes.2023.112388</a>
            </li>
            <li>
              Mishra, V., Babu, A., Schreurs, R., Wu, K., Hermans, M. J. M., & Ayas, C. (2023). <em>Microstructure estimation and validation of ER110S-G steel structures produced by wire and arc additive manufacturing</em>. Journal of Materials Research and Technology, 23, 3579-3601. 
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1016/j.jmrt.2023.01.214" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.jmrt.2023.01.214</a>
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2022). <em>A stress-based criterion to identify and control intersections in 2D compliance minimization topology optimization</em>. Structural and Multidisciplinary Optimization, 65(11), 1-19. 
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1007/s00158-022-03424-5" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s00158-022-03424-5</a>
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2022). <em>Simultaneous topology and deposition direction optimization for wire and arc additive manufacturing</em>. Manufacturing Letters, 31, 45-51. 
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1016/j.mfglet.2021.05.011" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.mfglet.2021.05.011</a>
            </li>
            <li>
              Mishra, V., Peeters, D. M., & Abdalla, M. M. (2019). <em>Stiffness and buckling analysis of variable stiffness laminates including the effect of automated fibre placement defects</em>. Composite Structures, 226, 111233. 
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1016/j.compstruct.2019.111233" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.compstruct.2019.111233</a>
            </li>
            <li>
              Bansal, A., Gupta, A., Pundir, M., Mishra, V., & Srivastava, V. K. (2012). <em>Dynamic performance of particles loaded cross-plied GFRP composite</em>. International Journal of Composite Materials, 2(5), 67-71. 
              <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.5923/j.cmaterials.20120205.01" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.5923/j.cmaterials.20120205.01</a>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 border-b pb-1"><strong>Conference Articles</strong></h3>
          <ul className="list-disc list-inside space-y-4">
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2023). <em>On controlling microstructure through topology optimization for additive manufacturing</em>. In proceedings of the ASMO UK12-EU1 Conference Engineering Design Optimization (pp. 147-152). 
              <br />
              <strong>Link:</strong> <a href="https://www.researchgate.net/profile/Vibhas-Mishra/publication/369480993_On_controlling_microstructure_through_topology_optimization_for_additive_manufacturing/links/641d8f2166f8522c38cd242b/On-controlling-microstructure-through-topology-optimization-for-additive-manufacturing.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Click here</a>
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2022). <em>Controlling cooling rates through topology optimization for required microstructure in additive manufacturing process</em>. In 2022 ASPE and Euspen Summer Topical Meeting on Advancing Precision in Additive Manufacturing (pp. 8-12). 
              <br />
              <strong>Link:</strong> <a href="https://www.proceedings.com/content/065/065359webtoc.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Click here</a>
            </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 border-b pb-1"><strong>Conference Presentations</strong></h3>
            <ul className="list-disc list-inside space-y-4">
            <li>
              Mishra, V., Ayas, C., Wu, J., (2025). <em>Multi-Planar Fabrication Sequence Optimization for Controlling Metallic Microstructures in Additive Manufacturing</em>. 16th World Congress on Structural and Multidisciplinary Optimization, Kobe, Japan. 
            </li>
            <li>
              Mishra, V., Wu, J., (2024). <em>Multi-planar material deposition optimization for metal additive manufacturing</em>. 9th European Congress on Computational Methods in Applied Sciences and Engineering, Lisbon, Portugal. 
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2022). <em>Microstructure estimation, validation and control through topology optimization</em>. 24th Meeting Materials Conference, Noordwijkerhout, The Netherlands. 
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2022). <em>On controlling microstructure through topology optimization for additive manufacturing</em>. ASMO-UK 12 / ASMO-Europe 1 / ISSMO Conference on Engineering Design Optimization, Leeds, United Kingdom. 
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2022).  <em>Computational design for wire and arc additive manufacturing</em>. 25th Engineering Mechanics Symposium, Arnhem, The Netherlands. 
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2022).  <em>Microstructure control through topology optimization for additive manufacturing</em>. 15th World Congress on Computational Mechanics & 8th Asian Pacific Congress on Computational Mechanics. (Online) 
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2021).  <em>Minimizing intersecting features through topology optimization for direct metal deposition</em>. 14th World Congress of Structural and Multidisciplinary Optimization. (Online)
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2020).  <em>Microstructure control through deposition pattern optimization</em>. 25th International Congress of Theoretical and Applied Mechanics. (Online)
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2020).  <em>Minimizing intersecting features through topology optimization for direct metal deposition</em>. 14th World Congress on Computational Mechanics. (Virtual)
            </li>
            <li>
              Mishra, V., Ayas, C., Langelaar, M., & van Keulen, F. (2019).  <em>Designs through topology optimization with considerations of direct metal deposition related constraints</em>. 2nd International Conference on Simulation for Additive Manufacturing, Pavia, Italy.
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

export default Publications;
