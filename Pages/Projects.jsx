import React from 'react';
import "../App.css";
import ProjectCard from '../Components/ProjectCard';
import GMACSImage from '/GMACS.jpg'; // Add the path to your image
import PacmanImage from '/Pacman.jpg'; // Add the path to your image
import DeclanImage from '/DeclansWebsite.jpg'; // Add the path to your image


const ProjectPage = () => {
  return (
    <div>
      <ProjectCard
        image={GMACSImage}
        title="GMACS (Greater Manchester Apprenticeship and Careers Service)"
        description="This is the client work that I have done and the client is called GMACS. They wanted me to look at a page in terms of accessibility and seeing what could be improved on their site but decided to take it one step further by doing their whole site. If you want to see a step-by-step process on how I did this please click the view more button."
        link="/"
      />
      <ProjectCard
        image={PacmanImage}
        title="The Pacman Project"
        description="The Pacman Project was a person project as I wanted to push the limits of what I can do as a programmer. I worked mostly on this project in my free time and it was completed before I learned React. The project was completed in JAVASCRIPT and if you want to know more please click on view more."
        link="/"
      />
      <ProjectCard
        image={DeclanImage}
        title="Declan's Website"
        description="Information about that project"
        link="/"
      />
    </div>
  );
};

export default ProjectPage