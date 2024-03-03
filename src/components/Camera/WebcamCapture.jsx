import { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";

export default function WebcamCapture({ containerRef, manualTrigger, onCapture }) {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  function switchCamera() {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  }

  const videoConstraints = {
    width,
    height,
    facingMode,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    setWidth(containerRef.current.offsetWidth);
    setHeight(containerRef.current.offsetHeight);
  }, [manualTrigger]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div className="">
      <button onClick={switchCamera}>switch</button>
      <Webcam audio={false} height={height} ref={webcamRef} screenshotFormat="image/jpeg" width={width} videoConstraints={videoConstraints} className="rounded-lg" />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
}
