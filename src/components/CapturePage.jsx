import Webcam from "react-webcam";
import shutterbutton from "../assets/shutterbutton.png";
import { useRef, useState, useEffect, useCallback } from "react";
import Spinner from "../assets/Spinner";
import { uploadBase64Img } from "../lib/utils";

export default function CapturePage() {
  const webcamRef = useRef(null);
  const containerRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const url = await uploadBase64Img(imageSrc);
    console.log(url);

    switchCamera();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [webcamRef]);

  return (
    // Content
    <div className="relative">
      <div className="w-svw h-svh flex flex-col">
        <h1 className="pt-5 pb-10 text-xl font-black tracking-tight text-center">BeGreen.</h1>
        <div ref={containerRef} className="flex-1 overflow-auto">
          <Webcam audio={false} height={height} ref={webcamRef} screenshotFormat="image/jpeg" width={width} videoConstraints={videoConstraints} className="rounded-lg" />
        </div>
        <div className="flex justify-center" onClick={capture}>
          <img src={shutterbutton} alt="shutter button" className="h-20 w-20 my-8" />
        </div>
      </div>

      {(height === 0 || loading) && (
        <>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          {/* Content on top of overlay*/}
          <div className="absolute inset-0 flex flex-column  items-center justify-center ">
            <Spinner />
            <div>Loading...</div>
          </div>
        </>
      )}
    </div>
  );
}
