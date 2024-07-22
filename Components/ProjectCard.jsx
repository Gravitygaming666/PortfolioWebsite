import React from 'react';
import { Link } from 'react-router-dom';
import "../CSSFolder/ProjectCard.css";

const ProjectCard = ({ image, title, description, link }) => {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <Link to={link}>
            <button className="view-more-btn">View more</button>
          </Link>
        </div>
      </div>
    );
  };

export default ProjectCard;