import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

export default function WebcamCapture() {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user");

  function switchCamera() {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  }

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode,
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <>
      <button onClick={switchCamera}>switch</button>
      <Webcam audio={false} height={720} ref={webcamRef} screenshotFormat="image/jpeg" width={1280} videoConstraints={videoConstraints} />
      <button onClick={capture}>Capture photo</button>
    </>
  );
}
