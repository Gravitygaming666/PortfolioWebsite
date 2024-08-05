import React from 'react';
import "../App.css";
import ProjectCard from '../Components/ProjectCard';
import GMACSImage from '/GMACS.jpg'; // Add the path to your image
import PacmanImage from '/Pacman.jpg'; // Add the path to your image
import DeclanImage from '/DeclansWebsite.jpg'; // Add the path to your image


const ProjectPage = () => {
  return (
    <div className= "Cproject"> 
      <ProjectCard
        image={GMACSImage}
        title="GMACS (Greater Manchester Apprenticeship and Careers Service)"
        description="I was employed by GMACS to create an accessibility report on a single webpage from their careers website. I took the work experience study a stage further by reporting on the whole website,
         looking at each page and making recommendations concerning W3C accessibility guidelines and suggesting what could be improved on their site. 
        Select view more to view details of the report that I presented in person to the client:"
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
        description="I designed and coded a website for fellow intern Declan.
This involve researching content, designing the site structure. Managing content collection and liaising with Declan, my client and building the website using html and css style sheets."
        link="/"
      />
    </div>
  );
};

export default ProjectPage