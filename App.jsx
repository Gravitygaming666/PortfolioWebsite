import { useState } from 'react';
import NavBar from './Components/navbar.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Hobbies from './Pages/Hobbies.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/SkillsP.jsx';
import DownloadBox from './Components/Downloadbox.jsx';
import Footer from './Components/Footer.jsx';
import CardContainer from './Components/CardContainer';
import DocumentationP from './Pages/DocumentationP.jsx';
import PersonalSkillsP from './Pages/PersonalSkillsP.jsx';
import ProgrammingSkillsP from './Pages/ProgrammingSkillsP.jsx';
import PacmanProjectP from './Pages/PacmanProjectP.jsx';
import GMACSpage from './Pages/GMACSpage.jsx';
import DeclanProject from './Pages/DeclanProject.jsx';
import './App.css'; // Optional: for styling

function App() {
 
  const Home = () => (
  <div>
  
  <DownloadBox /> {/* Add the DownloadBox component here */}
  <CardContainer />
  
</div>
);


  return (
 

    <Router>
      
      <div>
      <br></br>
      <br></br>
      <br></br>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillsP" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/DocumentationP" element={<DocumentationP />} />
        <Route path="/PersonalSkillsP" element={<PersonalSkillsP />} />
        <Route path="/ProgrammingSkillsP" element={<ProgrammingSkillsP />} />
        <Route path="/PacmanProjectP" element={<PacmanProjectP />} />
        <Route path="/GMACSpage" element={<GMACSpage />} />
        <Route path="/DeclanProject" element={<DeclanProject />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to Home */}
        </Routes>
        
        <Footer />
        <br></br>
        <br></br>
      </div>
      
    </Router>
 )
}
 
  

export default App
