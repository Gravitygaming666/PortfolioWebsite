import React from "react";
import SkillsContainers from "../Components/SkillsContainer";
import "../App.css";

const items = [
  {
    icon: '/JavaScript.png',
    title: 'JAVASCRIPT',
    description:
      'information about that skill (JAVASCRIPT)',
  },
  {
    icon: '/CSS.png',
    title: 'CSS',
    description: 'information about that skill (CSS)',
  },
  {
    icon: '/HTML.png',
    title: 'HTML5',
    description:
      'information about that skill (HTML)',
  },
  {
    icon: '/React.png',
    title: 'React',
    description:'information about that skill (React programming language)',
  },
  {
    icon: '/CSharp.png',
    title: 'C#',
    description:
      'information about that skill (C# programming language)',
  },
  {
    icon: '/W3C.png',
    title: 'W3C',
    description:
      'information about that skill (W3C requirements)',
  },
];



const ProgrammingSkillsP = () => {
    return (
      <div className="Doccontainer">
      {items.map((item, index) => (
        <SkillsContainers
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
  };

  export default ProgrammingSkillsP;

