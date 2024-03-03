// import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import "./index.css";
import left from "./assets/left-arrow.png";
import { Link } from "react-router-dom";
// import Friend from './Friend.jsx'
import exkellybur from "./assets/exkellybur.jpeg";
import loic from "./assets/loic.jpeg";
import seek from "./assets/seek.jpeg";
import jamesyapper from "./assets/jamesyapper.jpeg";
import uottahack6 from "./assets/uottahack6.png";
import Podium from "./Podium.jsx";
import LeaderboardCard from "./LeaderboardCard.jsx";

function Leaderboard() {
  return (
    <>
      <div>
        {/* <nav className="fixed w-full z-10 top-0 justify-start flex flex-row p-3 bg-gradient-to-b from-lime-800"> */}
        <nav className="fixed w-full z-10 top-0 flex flex-row justify-start p-3 bg-gradient-to-b from-lime-800">
          <Link to="/">
            <button>
              <img src={left} alt="left arrow" className="h-8 w-8" />
            </button>
          </Link>
          <h1 className="font-black text-xl ml-28">BeGreen</h1>
        </nav>

        <div className="flex justify-center mt-20 text-lg font-bold ml-5">
          <p className="text-green-100 font-black text-2xl">LEADERBOARD 🏆</p>
        </div>

        <div>
          <LeaderboardCard username="uottahack6" profilepic={uottahack6} points="60" />
          <LeaderboardCard username="jamesyapper" profilepic={jamesyapper} points="51" />
          <LeaderboardCard username="exkellybur" profilepic={exkellybur} points="38" />
          <LeaderboardCard username="loic" profilepic={loic} points="25" />
          <LeaderboardCard username="seek" profilepic={seek} points="22" />

          <Podium />

          <div className="justify-center flex">
            <button className="mt-5 text-xl font-bold ml-5 rounded-l bg-green-950 w-3/4 h-10 opacity-30">Redeem 20% off</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
