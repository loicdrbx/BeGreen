import Picture from "../Picture";
import { Link } from "react-router-dom";

export default function ResultsPage() {
  return (
    <div className="mx-2">
      <h1 className="text-2xl font-black tracking-tight text-center py-3">BeGreen.</h1>
      <Picture frontImgURL={window.localStorage.getItem("front")} backImgURL={window.localStorage.getItem("back")} />
      <div className="flex flex-col items-center space-y-5 mt-5">
        <p className="text-xl font-black text-center">Your score is {window.localStorage.getItem("score")}</p>
        <pre className="text-lg font-bold text-center text-wrap">&quot;{window.localStorage.getItem("caption")}&quot;</pre>

        <Link to={"/"}>
          <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">Done</button>
        </Link>
      </div>
    </div>
  );
}
