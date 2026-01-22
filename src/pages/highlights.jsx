import React from "react";

// Example data for portfolio highlights
const portfolioHighlights = [
  {
    title: "Differentiable Modelling and Optimization of Multi-Planar Slicing for Multi-Axis Additive Manufacturing",
    type: "Publication",
    description:
      "Published in Structural and Multidisciplinary Optimization. A mathematical approach to optimize deposition sequence to minimize insitu distortion of metal additive manufacturing parts.",
    link: " https://doi.org/10.1007/s00158-025-04240-3",
    date: "Jan 2026",
  },
  {
    title: "AM4Micro: Designing Material Microstructures Through Additive Manufacturing Sequence Planning",
    type: "Project",
    description:
      "Wire Arc Additive Manufacturing (WAAM) is a promising 3D printing technique for producing large, customized metal parts with complex geometries. However, its industrial adoption remains limited due to residual stresses and undesirable microstructures. To achieve optimal mechanical performance, this project, AM4Micro, proposes a computational design method to tailor material microstructures by additive manufacturing sequence planning. The computational method will be experimentally validated through industrial collaboration. Ultimately, AM4Micro seeks to advance WAAM as a reliable and sustainable manufacturing technology for key sectors, including aerospace, maritime, and construction..",
    link: "https://www.tudelft.nl/2025/io/maart/ide-projects-receive-nwo-funding-linked-to-nwa-routes",
    date: "Apr 2025",
  },
];

const PortfolioHighlights = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
                              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <h2>{item.date}</h2>
              </div>

              <div>
                <h3 className="text-sm text-blue-600 font-medium">
                  {item.type}
                </h3>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
                <a
                  href={item.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
