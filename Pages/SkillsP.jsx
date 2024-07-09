import React from 'react';
import SkillCard from '../Components/SkillCard';
import '../App.css'; // Optional: for styling


const SkillsP = () => {
  const programmingSkills = ['Python', 'HTML', 'CSS', 'React', 'W3C requirements'];
  const personalSkills = ['Keeping focus', 'Social skills', 'Problem solving', 'Growth mindset', 'Teamwork', 'Client facing'];
  const documentationSkills = ['Spreadsheets', 'Testing', 'Design', 'Feedback', 'Report writing'];

  return (
    <div className="home-page">
      <SkillCard
        title="Programming Skills"
        icon="/CodingSkill.png"
        skills={programmingSkills}
        link="/ProgrammingSkills.jsx"
      />
      <SkillCard
        title="Personal Skills"
        icon="/PersonalSkills.png"
        skills={personalSkills}
        link="/personalSkills.jsx"
      />
      <SkillCard
        title="Documentation Skills"
        icon="/Skills.png"
        skills={documentationSkills}
        link="/Documentation.jsx"
      />
    </div>
  );
};


export default SkillsP;