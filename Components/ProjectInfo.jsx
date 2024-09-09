import React from "react";
import "../CSSFolder/ProjectInfo.css";



const ProjectInfo = ({ imageSrc, text }) => {
    return (
      <div className="image-section">
        <img src={imageSrc} alt="Project info" className="image" />
        <p>{text}</p>
      </div>
    );
  };

  export default ProjectInfo;
  