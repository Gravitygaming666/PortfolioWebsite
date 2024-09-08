import React from "react";
import SkillsContainers from "../Components/SkillsContainer";
import "../App.css";

const items = [
  {
    icon: '/Spreadsheet.png',
    title: 'Spreadsheet',
    description:
      'Spreadsheet Skill.',
  },
  {
    icon: '/Testing.png',
    title: 'Testing',
    description:
      'Testing skill',
  },
  {
    icon: '/Planning.png',
    title: 'Planning',
    description:
      'Planning Skill',
  },
  {
    icon: '/Feedback.png',
    title: 'Feedback',
    description:
      'Feedback skill',
  },
  {
    icon: '/ReportWriting.png',
    title: 'Report Writing',
    description:
      'Report writing skill',
  },
];

 

const DocumentationP = () => {
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

  export default DocumentationP;