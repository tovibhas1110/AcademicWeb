// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/AcademicWeb/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/AcademicWeb/About" style={{ marginRight: "10px" }}>About Me</Link>
      <Link to="/AcademicWeb/Research" style={{ marginRight: "10px" }}>Research</Link>
      <Link to="/AcademicWeb/Publications" style={{ marginRight: "10px" }}>Publications</Link>
      <Link to="/AcademicWeb/Teaching" style={{ marginRight: "10px" }}>Teaching</Link>
      <Link to="/AcademicWeb/Contact" style={{ marginRight: "10px" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
