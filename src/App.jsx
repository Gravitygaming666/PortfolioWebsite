import { useState } from 'react';
import NavBar from './Components/navbar';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Hobbies from './Components/hobbies.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/skills.jsx';
import DownloadBox from './Components/Downloadbox.jsx';
import Footer from './Components/Footer.jsx';
import './App.css'; // Optional: for styling

function App() {
  const [count, setCount] = useState(0)

    const Home = () => <h2>Home</h2>;
    const Skills = () => <h2>Skills</h2>;
    const Projects = () => <h2>Projects</h2>;
    const Hobbies = () => <h2>Hobbies</h2>;

  return (
 

    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to Home */}
        </Routes>
        <DownloadBox /> {/* Add the DownloadBox component here */}
        <Footer />
      </div>
    </Router>
 )
}
 
  

export default App
