// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
  return (
    
    <nav  className="navbar" >
      <ul>
        <li> <Link to="/AcademicWeb/">Home</Link></li>
        <li> <Link to="/AcademicWeb/About">About Me</Link></li>
        <li> <Link to="/AcademicWeb/Research">Research</Link></li>
        <li> <Link to="/AcademicWeb/Publications">Publications</Link></li>
        <li> <Link to="/AcademicWeb/Highlights">Highlights</Link></li>
        <li> <Link to="/AcademicWeb/Teaching">Teaching</Link></li>
        <li><Link to="/AcademicWeb/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
