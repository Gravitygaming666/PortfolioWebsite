import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SkillCard = ({ icon, skills, link }) => {
  return (
    <div className="skill-card">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.id} className="skill">
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
  
