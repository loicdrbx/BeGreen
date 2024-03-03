import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebcamCapture from './components/WebcamCapture.jsx'
import "./App.css";
// import { analyzeImageFromUrl } from "./lib/azure";
import storage from "./lib/firebase";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
// import { test } from "./lib/openai";

function App() {

  const file = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  const storageRef = ref(storage, `${file.substring(0, 12)}`);
  uploadString(storageRef, file, 'base64').then((snapshot) => {
    console.log('Uploaded a base64url string!');
    getDownloadURL(storageRef).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  });

  
  const [count, setCount] = useState(0);

  useEffect(() => {
    // analyzeImageFromUrl();
    // test();
  }, []);

  return (
    <>
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
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WebcamCapture />
    </>
  );
}

export default App;
