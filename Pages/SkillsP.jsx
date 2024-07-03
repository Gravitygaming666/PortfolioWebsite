import React from 'react';
import SkillCard from '../Components/SkillCard';
import '../App.css'; // Optional: for styling

const SkillsP = () => {
const codingSkills = ["Python", "HTML", "CSS", "React", "C#", "W3C requirements"];
  const softSkills = ["Keeping focus", "Social skills", "Problem solving", "Growth mindset", "Teamwork", "Client Facing"];
  const otherSkills = ["Spreadsheet", "Testing", "Planning", "Design", "Feedback", "Report writing"];



  return (
    <div className="Skillsp">
      <SkillCard 
        icon="/CodingSkill.png" 
        skills={codingSkills} 
        link="/"
      />
      <SkillCard 
        icon="/PersonalSkills.png" 
        skills={softSkills} 
        link="/"
      />
      <SkillCard 
        icon="/Project.png" 
        skills={otherSkills} 
        link="/"
      />
    </div>
  );
}

export default SkillsP;