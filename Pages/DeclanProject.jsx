import React from "react";
import ProjectInfo from "../Components/ProjectInfo";
import ViewProject from "../Components/ViewProject";
import "../App.css";





function DeclanProject() {
    return (

    
    <div className="ProjectContainer">
      <ProjectInfo imageSrc="PPWireframe.jpg" text="1. Info about the project" />
      <ProjectInfo imageSrc="MiroWireframe.jpg" text="2. Info about the project" />
      <ProjectInfo imageSrc="DeclanWebsite.jpg" text="3. Info about the project" />
      <ProjectInfo imageSrc="LowTime.jpg" text="4. Info about the project" />
    </div>
    );
  }
  
  export default DeclanProject;