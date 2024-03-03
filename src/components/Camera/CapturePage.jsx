import WebcamCapture from "./WebcamCapture";
import shutterbutton from "../../assets/shutterbutton.png";

export default function CapturePage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <h1 className="pt-5 pb-10 text-xl font-black tracking-tight text-center">BeGreen.</h1>
      <div className="flex-1 overflow-auto bg-blue-300">
        <WebcamCapture />
      </div>
      <div className="flex justify-center">
        <img src={shutterbutton} alt="shutter button" className="h-20 w-20 my-8" />
      </div>
    </div>
  );
}
