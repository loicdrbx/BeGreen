// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import "./index.css";
import profilepic from "./assets/profilepic.jpeg";

export default function UserHeader({ username }) {
  return (
    <>
      {/* Profile picture and name */}
      <div className="flex flex-row justify-start items-center ml-5">
        <img src={profilepic} alt="profile picture" className="rounded-full h-9 w-9" />
        <div className="text-sm pl-2">
          <p className="font-medium">{username}</p>
          <p className="text-gray-500 font-thin">Carleton University</p>
        </div>
      </div>
    </>
  );
}
