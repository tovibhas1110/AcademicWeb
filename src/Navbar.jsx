// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>About Me</Link>
      <Link to="/Research" style={{ marginRight: "10px" }}>Research</Link>
      <Link to="/Publications" style={{ marginRight: "10px" }}>Publications</Link>
      <Link to="/Teaching" style={{ marginRight: "10px" }}>Teaching</Link>
      <Link to="/Contact" style={{ marginRight: "10px" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
