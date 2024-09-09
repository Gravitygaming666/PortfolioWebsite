import React from "react";
import ProjectInfo from "../Components/ProjectInfo";
import ViewProject from "../Components/ViewProject";
import "../App.css";





function PacmanProjectP() {
    return (

    
    <div className="ProjectContainer">
      <ProjectInfo imageSrc="Pacman.jpg" text="1. Info about the project" />
      <ViewProject />
      <br></br>
      <ProjectInfo imageSrc="GameMap.jpg" text="2. Info about the project" />
      <ProjectInfo imageSrc="GhostCode.jpg" text="3. Info about the project" />
      <ProjectInfo imageSrc="PacmanCode.jpg" text="4. Info about the project" />
    </div>
    );
  }
  
  export default PacmanProjectP;

