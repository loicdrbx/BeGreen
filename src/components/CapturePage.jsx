import Webcam from "react-webcam";
import shutterbutton from "../assets/shutterbutton.png";
import { useRef, useState, useEffect, useCallback } from "react";

export default function CapturePage() {
  const webcamRef = useRef(null);
  const containerRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const videoConstraints = {
    width,
    height,
    facingMode,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    setWidth(containerRef.current.offsetWidth);
    setHeight(containerRef.current.offsetHeight);
  }, []);

  const switchCamera = useCallback(() => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  }, [setFacingMode]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <h1 className="pt-5 pb-10 text-xl font-black tracking-tight text-center">BeGreen.</h1>
      <div ref={containerRef} className="flex-1 overflow-auto bg-gray-900">
        <Webcam audio={false} height={height} ref={webcamRef} screenshotFormat="image/jpeg" width={width} videoConstraints={videoConstraints} className="rounded-lg" />
      </div>
      <div className="flex justify-center">
        <img src={shutterbutton} alt="shutter button" className="h-20 w-20 my-8" />
      </div>
    </div>
  );
}
