const pomodoroTimer = document.querySelector('#pomodoro-timer');

const startButton = document.querySelector('#pomodoro-start');
const pauseButton = document.querySelector('#pomodoro-pause');
const stopButton = document.querySelector('#pomodoro-stop');

// START
startButton.addEventListener('click', () => {
  toggleClock();
})

// PAUSE
pauseButton.addEventListener('click', () => {
  toggleClock();
})

// STOP
stopButton.addEventListener('click', () => {
  toggleClock(true);
})

let isClockRunning = false;

// in seconds = 25 mins
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;

// in seconds = 5 mins;
let breakSessionDuration = 300;

const toggleClock = (reset) => {
    if (reset) {
      // STOP THE TIMER
    } else {
      if (isClockRunning === true) {
        // PAUSE THE TIMER
        isClockRunning = false;
      } else {
        // START THE TIMER
        isClockRunning = true;
      }
    }
  }