// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
  return (
    
    <nav  className="navbar" >
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/About">About Me</Link></li>
        <li> <Link to="/Research">Research</Link></li>
        <li> <Link to="/Publications">Publications</Link></li>
        <li> <Link to="/Highlights">Highlights</Link></li>
        <li> <Link to="/Teaching">Teaching</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
