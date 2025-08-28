import React, { useState, useEffect, useRef } from "react";
import Step from "../steps/steps";
import "../../index.css";
import InfoBot from "../bot/inforbot";
import { ProgressBar } from 'primereact/progressbar';

const ScribeStylePlayer = ({ steps, autoplay, delay = 3000, currentIndex, isPlayingCallBack }) => {
  const [current, setCurrent] = useState(currentIndex);
  const [transitionSteps, setTransitionSteps] = useState(steps);
  const [playing, setPlaying] = useState(autoplay);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const timerRef = useRef(null);
  const [progressValue,setProgressValue] = useState(0)

  useEffect(() => {
    setCurrent(0);
    setTransitionSteps(steps);
  }, [steps]);

  useEffect(() => {
    if (playing) {
      timerRef.current = setTimeout(() => nextStep(), delay);
    }
    return () => clearTimeout(timerRef.current);
  }, [current, playing]);

  useEffect(()=>{
    isPlayingCallBack(playing)
  },[playing])

  useEffect(() => {
    if (steps[current]) setCursorPos(steps[current].cursor || { x: 0, y: 0 });
  }, [current, steps]);

  useEffect(()=>{
    const temp = (current/(steps.length - 2))
    setProgressValue(temp* 100)
  },[current])

  const nextStep = () => {
    if (current < steps.length - 1) {
      setCurrent(prev => prev + 1);
      updateTransition(true);
    } else setPlaying(false);
  };

  const prevStep = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1);
      updateTransition(false);
    }
  };

  const reset = () => {
    setCurrent(0);
    setPlaying(autoplay);
    setTransitionSteps(prev => prev.map(s => ({ ...s, selected: false })));
  };

  const updateTransition = next => {
    if (next) {
      setTransitionSteps(prev =>
        prev.map(t => (t.caption === steps[current + 1]?.caption ? { ...t, selected: true } : { ...t, selected: false }))
      );
    } else {
      setTransitionSteps(prev =>
        prev.map(t => (t.caption === steps[current - 1]?.caption ? { ...t, selected: true } : { ...t, selected: false }))
      );
    }
  };

  const handleSelectStep = step => {
    const index = steps.findIndex(s => s.caption === step.caption);
    setTransitionSteps(prev => prev.map(s => (s.caption === step.caption ? { ...s, selected: true } : { ...s, selected: false })));
    setCurrent(index);
  };

  //bot messager
  const [showBot, setShowBot] = useState(false);
  useEffect(() => {
    setShowBot(false);
  
    const timer = setTimeout(() => {
      setShowBot(true); 
    }, 800); 
  
    return () => clearTimeout(timer);
  }, [current]);

  //progress bar

  const valueTemplate = (value) => {
    return (
        <React.Fragment>
            Step {Math.ceil((value/(100))*(steps.length - 2))} of  { steps.length - 2}
        </React.Fragment>
    );
};

  return (
    <div className="scribe-player">

      {steps[current] && (
        <div className="scribe-step">
          <img
            src={steps[current].img}
            className="scribe-image"
            alt="step"
          />
          <img
            src="/cursor.avif"
            className={`scribe-cursor ${steps[current].click ? 'click' : ''}`}
            style={{ left: `${cursorPos.x * 100}%`, top: `${cursorPos.y * 100}%` }}
          />
          <InfoBot
  imageSrc="/Bot (2).png"
  message={steps[current].botMessage}
  visible={showBot && steps[current].showBot}
/>
          {steps[current].caption && (
         
              <ProgressBar  value={progressValue} displayValueTemplate={valueTemplate}></ProgressBar>
         
        
          )}
        </div>
      )}
      <div className="scribe-controls">
        <button onClick={prevStep} disabled={current === 0}>◀ Prev</button>
        <button onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={nextStep} disabled={current === steps.length - 1}>Next ▶</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="step-list">
        {transitionSteps.map((step, index) => step.caption && (
          <Step key={index} step={step} onClick={() => handleSelectStep(step)} />
        ))}
      </div>
    </div>
  );
};

export default ScribeStylePlayer;
