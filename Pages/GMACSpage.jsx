import React from "react";
import ProjectInfo from "../Components/ProjectInfo";
import ViewProject from "../Components/ViewProject";
import "../App.css";





function GMACSpage() {
    return (

    
    <div className="ProjectContainer">
      <ProjectInfo imageSrc="ClientBrief.jpg" text="1. Info about the project" />
      <ProjectInfo imageSrc="TestPlan.jpg" text="2. Info about the project" />
      <ProjectInfo imageSrc="PowerPoint.jpg" text="3. Info about the project" />
      <ProjectInfo imageSrc="WebsiteReport.jpg" text="4. Info about the project" />
    </div>
    );
  }
  
  export default GMACSpage;