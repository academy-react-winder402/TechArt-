import React, { useState } from "react";
import { VoiceRecorder } from "react-voice-recorder-player";
import image from "../../assets/Images/11.png";

const VoiceCommentForm = () => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = (audioData) => {
    setIsRecording(false);
    setAudioUrl(audioData.blobURL);
  };

  return (
    <div>
      <VoiceRecorder
        isRecording={isRecording}
        onStopRecording={handleStopRecording}
        audioURL={audioUrl}
        buttonImage={image} // استفاده از عکس برای دکمه‌ها
        buttonStyle={{
          backgroundColor: "blue", // استایل دکمه‌ها
          color: "white",
          borderRadius: "5px",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      />
    </div>
  );
};

export default VoiceCommentForm;
