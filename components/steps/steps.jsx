import React from 'react'
import '../../index.css'


const Step = ({ step, onClick }) => {
  return (
    <div
      className={`step-item ${step.selected ? 'selected' : ''}`}
      onClick={() => onClick(step)}
    >
      {step.caption}
    </div>
  );
};

export default Step;