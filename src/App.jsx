import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Post from "./Post.jsx";
import Bottom from "./Bottom.jsx";

import { incrementScore } from "./lib/utils.js";

function App() {
  useEffect(() => {
    // analyzeImageFromUrl();
    // test();
  }, []);

  
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-14">
          <Post />
          <Post />
          <Post />
          <Bottom />
        </div>
      </div>
    </>
  );
}

export default App;
