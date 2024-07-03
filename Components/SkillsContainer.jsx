// SkillsContainer.jsx
import React from 'react';
import '../App.css';

const  SkillsContainers = ({ imgS, text }) => {
  return (
    <div className="items">
      <img src={imgS} alt="Icon" />
      <p>{text}</p>
    </div>
  );
};

export default SkillsContainers;
