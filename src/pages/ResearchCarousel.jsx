import { useEffect, useState } from "react";
import "./ResearchCarousel.css";

const slides = [
  {
    image: "./images/compdesign.png",
    title: "Computational Design",
    description:
      "Generating high-performance optimized structural design using Topology Optimization with Additive Manufacturing considerations.",
  },
  {
    image: "./images/AMProcessSim.jpg",
    title: "AM Process Modelling",
    description:
      "Modelling metal additive manufacturing process for temperature, distortion and microstructure predictions, with emphasis on considering design effects.",
  },
  {
    image: "./images/AMProcessOpt.jpg",
    title: "AM Process Optimization",
    description:
      "Generating optimized material deposiiton stratgies for additive manufacturing process to achieve distortion minimization, manufacturing time minimization, and controlling material properties.",
  },
];

export default function ResearchCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="text">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
