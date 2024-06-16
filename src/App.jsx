import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './Components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Optional: for styling

function App() {
  const [count, setCount] = useState(0)

    const Home = () => <h2>Home</h2>;
    const skills = () => <h2>Skills</h2>;
    const Projects = () => <h2>Projects</h2>;
    const Hobbies = () => <h2>Hobbies</h2>;

  return (
    <>
 {

    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/App" exact component={Home} />
          <Route path="/skills" component={skills} />
          <Route path="/Projects" component={Projects} />
          <Route path="/hobbies" component={Hobbies} />
        </Switch>
      </div>
    </Router>
}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
