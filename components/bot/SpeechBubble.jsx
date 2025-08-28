import React from "react";
import "./infoBot.css";

const SpeechBubble = ({ message }) => {
  return (
    <div className="speech-bubble">
      {message}
      <div className="speech-arrow" />
    </div>
  );
};

export default SpeechBubble;
