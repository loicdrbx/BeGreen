import "./App.css";
import shutterbutton from "./assets/shutterbutton.png";
import { Link } from "react-router-dom";

import "./index.css";

function Bottom() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Link to="/camera">
          <img src={shutterbutton} alt="shutter button" className="fixed z-10 bottom-0 h-28 w-28 mb-8 ml-[-52px]" />
        </Link>
      </div>
    </>
  );
}

export default Bottom;
