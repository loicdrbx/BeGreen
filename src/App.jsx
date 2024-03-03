import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Post from "./Post.jsx";
import Bottom from "./Bottom.jsx";
// import { getTimeline } from "./lib/utils.js";

export default function App() {
  // for testing purposes

  // async function doSomething() {
  // const timeline = await getTimeline();
  // console.log(timeline);
  // }

  useEffect(() => {
    // doSomething();
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
