import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Post from "./Post.jsx";
import Bottom from "./Bottom.jsx";
import { getTimeline } from "./lib/utils.js";

export default function App() {
  const [timeline, setTimeline] = useState([]);

  async function fetchData() {
    const timelineData = await getTimeline();
    setTimeline(timelineData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="mt-14">
          {timeline.map((post, index) => (
            <Post key={index} username={post.username} backImg={post.backImg} frontImg={post.frontImg} score={post.score} caption={post.caption} postedAt={post.postedAt} />
          ))}
          <Bottom />
        </div>
      </div>
    </>
  );
}
