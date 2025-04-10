import React, { useRef, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

const VideoCall = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [isCallActive, setIsCallActive] = useState(true);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        streamRef.current = stream;
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  }, []);

  const endCall = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsCallActive(false);
  };

  return (
    <Container className="video-call-container">
      <h2 className="video-title">Video Call</h2>
      <p className="video-subtitle">Connect with your doctor via video.</p>
      {isCallActive ? (
        <>
          <div className="video-wrapper">
            <video ref={videoRef} autoPlay playsInline className="video-feed" />
          </div>
          <div className="button-container">
            <Button variant="danger" onClick={endCall} className="end-call-button">End Call</Button>
          </div>
        </>
      ) : (
        <p className="call-ended">Call ended.</p>
      )}
    </Container>
  );
};

export default VideoCall;
