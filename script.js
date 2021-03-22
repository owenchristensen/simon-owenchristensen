// Global Constants
const cluePauseTime = 333;  // How long to pause in between clues
const nextClueWaitTime = 1000;  // How long to wait before starting playback of the clue sequence
const speedUp = 20;  // How much to speed up each round by 
const timeClock = 10000  // How much time player has before timer runs out
const patternLen = 8  // How long the pattern is

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strikes = 0;
var clueHoldTime;  // How long to hold each clue's light/sound
var timer = false;

// Pattern Randomizer
function randomizePattern() {
  var newPattern = [];
  var min = Math.ceil(1);
  var max = Math.floor(patternLen-1);
  for (var i = 0; i < patternLen-1; i++) {
    newPattern[i] = Math.floor(Math.random() * (max - min) + min);
  }
  console.log(newPattern); // Console logs the pattern for debugging purposes
  return newPattern;
}

// Starts game when button is pressed
function startGame() {
  clueHoldTime = 1000;  //Ensures speed gets reset after each round
  pattern = randomizePattern();
  // Initialize Game Variables
  progress = 0;
  gamePlaying = true;

  // Swaps Start and Stop Buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  return;
}

// Stops game when button is pressed
function stopGame() {
  gamePlaying = false;

  // Swaps Start and Stop Buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound frequency mapping
const freqMap = {
  1: 262,
  2: 294.8,
  3: 327.5,
  4: 349.3,
  5: 436.7,
  6: 491.2
};

// Stopping and starting frequencies
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// Lighting buttons during sequence
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// Set of functions that show the guessing sequence
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    clueHoldTime = clueHoldTime - speedUp; // Speed up pattern each round
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms"); // For each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); // Set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Alerting player of win or loss
function loseGame() {
  stopGame();
  clearInterval(timer); // Prevents timer from triggering alert in permanent loop
  alert("Game Over. You lost.");
  
}

function winGame() {
  stopGame();
  clearInterval(timer);
  alert("Game Over. You won!");
}

// Checking guesses
function guess(btn) {
  startTimer();
  console.log("user guessed: " + btn);  // Console logs guess for debugging purposes
  if (!gamePlaying) {
    return;
  }
  
  //Correct guess
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      }
      else {
        clearInterval(timer); // Stops timer if guess was correct
        timer = false;
        progress++;
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }
  }
  
  // Incorrect guess
  else {
    strikes = strikes + 1;
    clueHoldTime = clueHoldTime + 10;  // Ensures speed doesnt increase after a strike
    if (strikes < 3) { // Strikes code
      alert("Strike number " + strikes + ". " + (3 - strikes) + " more and it's game over!");
      clearInterval(timer);
    }
    playClueSequence();
    if (strikes == 3) {
      loseGame();
    }
  }
}

// Timer function
function startTimer() {
  if (!timer) {
    timer = setInterval(loseGame, timeClock);
  }
}
