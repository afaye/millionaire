var level1Music = new Audio('audio/level-1.mp3');
var level2Music = new Audio('audio/level-2.mp3');
var level3Music = new Audio('audio/level-3.mp3');
var wrongAnswerAudio = new Audio('audio/wrong.mp3');
var rightAnswerAudio = new Audio('audio/right.mp3');
var suspenseAudio = new Audio('audio/suspense.mp3');

// main menu music (custom loop)
var level1MusicOn = false;
var level1MusicInterval;
var level2MusicInterval;
var level3MusicInterval;

function startLevel1Music() {
  if (level1MusicOn){
    return;
  }
  level1MusicInterval = setInterval(function(){
    level1Music.currentTime = 0;
    level1Music.play();
  },13970);
  level1Music.currentTime = 0;
  level1Music.play();
  level1MusicOn = true;
}


function startLevel2Music() {
  stopAllMusics();
  level2MusicInterval = setInterval(function(){
    level2Music.currentTime = 0;
    level2Music.play();
  },32000);
  level2Music.play();
  currentLevelMusic = level2Music;
  currentLevel = 2;
}


function startLevel3Music() {
  stopAllMusics();
  level3MusicInterval = setInterval(function(){
    level3Music.currentTime = 0;
    level3Music.play();
  },16000);
  level3Music.play();
  currentLevelMusic = level3Music;
  currentLevel = 3;
}

function stopAllMusics(){
  stopLevel1Music();
  stopLevel2Music();
  stopLevel3Music();
}

function playSuspense() {
  stopAllMusics();
  suspenseAudio.play();
}

function playRightAnswer() {
  rightAnswerAudio.play();
  setTimeout(function(){
    rightAnswerAudio.pause();
    rightAnswerAudio.currentTime = 0;
  },3500);
}

function playStartAnswer() {
  rightAnswerAudio.currentTime = 3.7;
  rightAnswerAudio.play();
  setTimeout(function(){
    rightAnswerAudio.pause();
    rightAnswerAudio.currentTime = 0;
  },4000);
}

function stopLevel1Music() {
  level1Music.pause();
  level1Music.currentTime = 0;
  level1MusicOn = false;
  clearInterval(level1MusicInterval);
}

function stopLevel2Music() {
  level2Music.pause();
  level2Music.currentTime = 0;
  clearInterval(level2MusicInterval);
}

function stopLevel3Music() {
  level3Music.pause();
  level3Music.currentTime = 0;
  clearInterval(level3MusicInterval);
}

function stopSuspense() {
  suspenseAudio.pause();
  suspenseAudio.currentTime = 0;
}