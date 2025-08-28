import React, { useState, useEffect } from "react";
import SpeechBubble from "./SpeechBubble";
import "./infoBot.css";

const InfoBot = ({ imageSrc, message,visible }) => {


  return (
    <div className={`info-bot-container ${visible ? "visible" : ""}`}>
      <img src={imageSrc} alt="Bot" className="info-bot-image" />
      {message && <SpeechBubble message={message} />}
    </div>
  );
};

export default InfoBot;
