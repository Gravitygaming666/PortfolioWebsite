import React from "react";
import SkillsContainers from "../Components/SkillsContainer";
import "../App.css";




const Documentation = () => {
    return (
      <div className="content">
        <SkillsContainers imgS="image1.jpg" text="This is some text next to image 1." />
        <SkillsContainers imgS="image2.jpg" text="This is some text next to image 2." />
        <SkillsContainers imgS="image3.jpg" text="This is some text next to image 3." />        
      </div>
    );
  };

  export default Documentation;