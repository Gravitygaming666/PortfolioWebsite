import React from 'react';
import { Link } from 'react-router-dom';
import '../CSSFolder/Skills.css';

const SkillCard = ({ icon, skills, title, link }) => {
  return (
    <div className="skill-card">
      <h2>{title}</h2>
      <div className="icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
      <Link to={link} className="view-more">
        View more
      </Link>
    </div>
  );
};


export default SkillCard;
  
