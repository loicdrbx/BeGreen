// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import "./index.css";
// import frontface from './assets/frontfacetest.jpeg'
// import backface from './assets/backfacetest.jpeg'

export default function Picture({ frontImgURL, backImgURL }) {
  return (
    <>
      {/* BeGreen picture*/}
      <div className="flex flex-col justify-center items-center relative pb-1">
        {/* <div className="w-[300px] h-[300px] bg-red-200 absolute top-10"></div> */}

        <img src={frontImgURL} alt="BeGreen front face picture" className="h-4/12 w-3/12 pt-3 rounded-md absolute top-2 left-3 overflow-hidden" />
        <img src={backImgURL} alt="BeGreen back face picture" className="object-cover h-96 pt-3 rounded-md overflow-hidden" />
      </div>
    </>
  );
}
