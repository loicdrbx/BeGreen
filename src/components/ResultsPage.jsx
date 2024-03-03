import { useSearchParams } from "react-router-dom";
import Picture from "../Picture";

export default function ResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="mx-2">
      <h1 className="text-2xl font-black tracking-tight text-center py-3">BeGreen.</h1>
      <Picture frontImgURL={searchParams.get("front")} backImgURL={searchParams.get("back")} />
      <div className="flex flex-col items-center space-y-5 mt-5">
        <p className="text-xl font-black text-center">Your score is {searchParams.get("score")}</p>
        <pre className="text-lg font-bold text-center text-wrap">&quot;{searchParams.get("caption")}&quot;</pre>
        <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md">Done</button>
      </div>
    </div>
  );
}
