import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Optional: for styling



const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
      </ul>
    </nav>
  );
};


export default NavBar;
