// import React, { useEffect, useRef, useState } from "react";
// import * as faceapi from "face-api.js";
// import { useNavigate } from "react-router-dom";

// const Face = ({ onFaceRecognized }) => {
//   const [initial, setInitial] = useState(false);
//   const [isRecognizing, setIsRecognizing] = useState(false);
//   const videoHeight = 480;
//   const videoWidth = 640;
//   const videoRef = useRef();
//   const canvasRef = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadModels = async () => {
//       const MODEL_URL = process.env.PUBLIC_URL + "/models";
//       setInitial(true);
//       await Promise.all([
//         faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
//         faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
//         faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
//         faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
//       ]);
//       console.log("Models loaded");
//     };
//     loadModels();
//   }, []);

//   const startRecognition = () => {
//     setIsRecognizing(true);
//     startVideo();
//   };

//   const startVideo = () => {
//     navigator.mediaDevices.getUserMedia({ video: {} })
//       .then(stream => {
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//       })
//       .catch(err => {
//         console.error("Error accessing webcam: ", err);
//       });
//   };

//   const handleVideoOnPlay = () => {
//     const intervalId = setInterval(async () => {
//         if (initial) {
//             setInitial(false);
//         }

//         // Ensure video has loaded metadata (dimensions) before creating canvas
//         if (videoRef.current.readyState !== 4) {
//             return; // Wait until the video is fully loaded
//         }

//         const canvas = faceapi.createCanvasFromMedia(videoRef.current);
//         canvasRef.current.innerHTML = ""; // Clear previous canvases
//         canvasRef.current.append(canvas); // Append new canvas

//         const displaySize = { width: videoWidth, height: videoHeight };
//         faceapi.matchDimensions(canvas, displaySize);

//         const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
//         const resizeDetections = faceapi.resizeResults(detections, displaySize);

//         const context = canvas.getContext("2d");
//         context.clearRect(0, 0, videoWidth, videoHeight);

//         if (detections.length > 0) {
//             faceapi.draw.drawDetections(canvas, resizeDetections);
//             faceapi.draw.drawFaceLandmarks(canvas, resizeDetections);
//             faceapi.draw.drawFaceExpressions(canvas, resizeDetections);

//             onFaceRecognized();
//             clearInterval(intervalId); // Stop interval after recognition
//             navigate("/dashboard");
//         } else {
//             // Draw a placeholder rectangle as a hint
//             context.strokeStyle = "red";
//             context.lineWidth = 4;
//             context.strokeRect(videoWidth / 2 - 50, videoHeight / 2 - 50, 100, 100);
//         }

//         console.log(detections);
//     }, 1000);
// };


//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl font-semibold mb-4">Face Recognition</h1>
//       {!isRecognizing && <p className="mb-8">To start recognition, click the button below:</p>}
//       <div className="relative text-center">
//         {!isRecognizing && (
//           <button
//             onClick={startRecognition}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
//           >
//             Start Recognition
//           </button>
//         )}
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           height={videoHeight}
//           width={videoWidth}
//           className="mt-4 z-0"
//           onPlay={handleVideoOnPlay}
//         />
//         <canvas ref={canvasRef} className="absolute mt-10"></canvas>
//       </div>
//       {initial && !isRecognizing && <p className="mt-4">Initializing...</p>}
//     </div>
//   );
// };

// export default Face;
