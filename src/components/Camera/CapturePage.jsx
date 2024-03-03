import WebcamCapture from "./WebcamCapture";
import Bottom from "../../Bottom";

export default function CapturePage() {
  return (
    <div>
      <div className="mt-5 mb-10 w-screen h-[70px] flex flex-col ">
        <h1 className="text-xl font-black tracking-tight text-center">BeGreen.</h1>
        <div className="mx-5">
          <WebcamCapture />

          <Bottom />
        </div>
      </div>
    </div>
  );
}
