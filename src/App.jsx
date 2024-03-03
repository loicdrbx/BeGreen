<<<<<<< Updated upstream
import { useState } from 'react'
<<<<<<< Updated upstream
import reactLogo from './assets/react.svg'
import WebcamCapture from './components/WebcamCapture.jsx'
import viteLogo from '/vite.svg'
import './App.css'
=======
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { analyzeImageFromUrl } from "./lib/azure";
import { test } from "./lib/openai";
>>>>>>> Stashed changes
=======
// import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx'
import Post from './Post.jsx'
import Bottom from './Bottom.jsx'
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // analyzeImageFromUrl();
    test();
  }, []);

  return (
    <>
      <div >
        <Navbar />
        <div className='pt-14'>
          <Post />
          <Post />
          <Bottom /> 
        </div>

      </div>
<<<<<<< Updated upstream
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WebcamCapture />
=======
  


>>>>>>> Stashed changes
    </>
  );
}

export default App;
