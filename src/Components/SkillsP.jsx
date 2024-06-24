import React from 'react';
import SkillCard from './SkillCard';
import '../App.css'; // Optional: for styling

const SkillsP = () => {
const codingSkills = ["Python", "HTML", "CSS", "React", "C#", "W3C requirements"];
  const softSkills = ["Keeping focus", "Social skills", "Problem solving", "Growth mindset", "Teamwork", "Client Facing"];
  const otherSkills = ["Spreadsheet", "Testing", "Planning", "Design", "Feedback", "Report writing"];



  return (
    <div className="SkillsP">
      <SkillCard 
        icon="/public/CodingSkill.png" 
        skills={codingSkills} 
        link="/public/coding-skills"
      />
      <SkillCard 
        icon="/PersonalSkills.png" 
        skills={softSkills} 
        link="/soft-skills"
      />
      <SkillCard 
        icon="/Project.png" 
        skills={otherSkills} 
        link="/other-skills"
      />
    </div>
  );
}

export default SkillsP;