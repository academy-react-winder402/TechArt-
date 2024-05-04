import React, { useState, useRef } from "react";

const VoiceCommentForm = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const audioRef = useRef();

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioURL(audioUrl);
        });

        mediaRecorder.start();
        setRecording(true);

        setTimeout(() => {
          mediaRecorder.stop();
          setRecording(false);
        }, 5000); // Stop recording after 5 seconds
      })
      .catch((error) => console.error("Error accessing microphone:", error));
  };

  const stopRecording = () => {
    const mediaRecorder = audioRef.current.mediaRecorder;
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div className="mt-4">
      {!recording ? (
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          onClick={startRecording}
        >
          Start Recording
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          onClick={stopRecording}
        >
          Stop Recording
        </button>
      )}
      {audioURL && (
        <audio ref={audioRef} className="mt-2" controls src={audioURL}></audio>
      )}
    </div>
  );
};

export default VoiceCommentForm;
