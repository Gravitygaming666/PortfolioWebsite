import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming you'll add CSS here

function Card({ image, title, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <Link to={link} className="card-link">Learn More</Link>
    </div>
  );
}

export default Card;