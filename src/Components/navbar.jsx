import React from 'react';
import Hobbies from './hobbies';
import Projects from './Projects';
import Skills from './skills';





import { Link } from 'react-router-dom';
 // Optional: for styling

const NavBar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/index">Home</Link></li>
        <li><Link to="/skills">About</Link></li>
        <li><Link to="/projects">Services</Link></li>
        <li><Link to="/hobbies">Contact</Link></li>
      </ul>
    </nav>
  );
};



export default NavBar;
