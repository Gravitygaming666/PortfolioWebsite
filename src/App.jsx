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

  const Home = () => (
  <div>
  <h2>Home</h2>
  <DownloadBox /> {/* Add the DownloadBox component here */}
</div>
);


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
        
        <Footer />
      </div>
    </Router>
 )
}
 
  

export default App
