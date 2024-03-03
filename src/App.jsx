import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Post from "./Post.jsx";
import Bottom from "./Bottom.jsx";

export default function App() {
  // for testing purposes
  useEffect(() => {}, []);

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
    </>
  );
}
