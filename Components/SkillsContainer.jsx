// SkillsContainer.jsx
import React from 'react';
import "../CSSFolder/SkillInfoPages.css"

const  SkillsContainers = ({ icon, title, description}) => {
  return (
    <div className="component">
    <img src={icon} alt={`${title} Icon`} className="icon" />
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);
};

export default SkillsContainers;
