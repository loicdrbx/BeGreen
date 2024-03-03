import { useEffect, useState } from "react";
import Navbar from './Navbar.jsx'
import Post from './Post.jsx'
import Bottom from './Bottom.jsx'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // analyzeImageFromUrl();
    // test();
  }, []);

  return (
    <>
      <div >
        <Navbar />
        <div className='pt-14'>
          <Post />
          <Post />
          <Post />
          <Bottom /> 
        </div>

      </div>

      {/* <WebcamCapture /> */}
    </>
  );
}

export default App;
