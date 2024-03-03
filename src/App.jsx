import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Post from "./Post.jsx";
import Bottom from "./Bottom.jsx";
import WebcamCapture from "./components/Camera/WebcamCapture.jsx";

function App() {
  useEffect(() => {
    // analyzeImageFromUrl();
    // test();
  }, []);
  
  return (
    <>
      <div>
        <Navbar />
        <div className="pt-14">
          <Post />
          <Post />
          <Post />
          <Bottom />
        </div>
      </div>

      <WebcamCapture />
    </>
  );
}

export default App;
