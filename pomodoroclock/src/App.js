import './Pomodoro.css';
import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft === 0) {
            audioRef.current.play();
            if (isBreak) {
              setTimerLabel('Session');
              setTimeLeft(sessionLength * 60);
            } else {
              setTimerLabel('Break');
              setTimeLeft(breakLength * 60);
            }
            setIsBreak(prevIsBreak => !prevIsBreak);
          }
          return newTimeLeft;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning, isBreak, breakLength, sessionLength]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsRunning(false);
    setIsBreak(false);
    setTimerLabel('Session');
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const decrementBreakLength = () => {
    if (breakLength > 1 && !isRunning) {
      setBreakLength(prevBreakLength => prevBreakLength - 1);
    }
  };

  const incrementBreakLength = () => {
    if (breakLength < 60 && !isRunning) {
      setBreakLength(prevBreakLength => prevBreakLength + 1);
    }
  };

  const decrementSessionLength = () => {
    if (sessionLength > 1 && !isRunning) {
      setSessionLength(prevSessionLength => prevSessionLength - 1);
    }
  };

  const incrementSessionLength = () => {
    if (sessionLength < 60 && !isRunning) {
      setSessionLength(prevSessionLength => prevSessionLength + 1);
    }
  };

  return (
    <div id="timer-container" className='flex flex-col items-center h-screen justify-center max-w-full p-auto m-auto'>
      <div id="break-label">
        Break Length: {breakLength}
      </div>
      <button id="break-decrement" onClick={decrementBreakLength}>
        Decrease
      </button>
      <button id="break-increment" onClick={incrementBreakLength}>
        Increase
      </button>

      <div id="session-length">
        Session Length: {sessionLength}
      </div>
      <button id="session-decrement" onClick={decrementSessionLength}>
        Decrease
      </button>
      <button id="session-increment" onClick={incrementSessionLength}>
        Increase
      </button>

      <div id="timer-label">
        {timerLabel}
      </div>
      <div id="time-left">
        {formatTime(timeLeft)}
      </div>

      <button className='bg-rose-200' id="start_stop" onClick={handleStartStop}>
        Start/Stop
      </button>
      <button className='bg-rose-300 transition hover:animate-bounce' id="reset" onClick={handleReset}>
        Reset
      </button>

      <audio id="beep" ref={audioRef} src="../music.mp3" />
    </div>
  );
};

export default PomodoroTimer;
