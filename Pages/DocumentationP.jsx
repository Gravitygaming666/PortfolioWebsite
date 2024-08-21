import React from "react";
import SkillsContainers from "../Components/SkillsContainer";
import "../App.css";


  const items = [
    {
      icon: '/public/DestinyIcon.png',
      title: 'Destiny 2',
      description:
        'This is text',
    },
    {
      icon: 'DestinyIcon',
      title: 'Star Wars',
      description:
        'This is text',
    },
  ];




const DocumentationP = () => {
    return (
      <div className="container">
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