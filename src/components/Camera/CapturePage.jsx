import WebcamCapture from "./WebcamCapture";
import Bottom from "../../Bottom";

export default function CapturePage() {
  return (
    <div className="h-screen">
      <div className="mt-5 mb-10 w-screen h-[70px] flex flex-col ">
        <h1 className="text-xl font-black tracking-tight text-center">BeGreen.</h1>
        <div className="flex-1">
          <WebcamCapture />

          <Bottom />
        </div>
      </div>
    </div>
  );
}
