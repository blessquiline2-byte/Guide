import React, { useState, useEffect, useRef } from "react";
import '../../index.css'
import { ProgressSpinner } from 'primereact/progressspinner';

const Guide = ({ guide, onClick }) => {
    return (
      <div
        className={`vkb-guide ${guide.isSelected ? 'selected' : ''}`}
        onClick={() => onClick(guide)}
      >
        {guide.guideName}<br/>{guide.isPlaying ? <ProgressSpinner style={{width: '20px', height: '20px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>:''}
      </div>
    );
  };
  
export default Guide;