// FUNCTION PLAY/STOP //

const playBtns = document.querySelectorAll(".playbutton");
const pauseBtns = document.querySelectorAll(".pausebutton");
const audioTags = document.querySelectorAll("audio");

const mainPlay = document.querySelector("#play");
const mainPause = document.querySelector("#pause");
const backwardBtn = document.querySelector("#backward");
const forwardBtn = document.querySelector("#forward");
const shuffleBtn = document.querySelector("#shuffle");
const repeatBtn = document.querySelector("#repeat");
const volumeBar = document.querySelector("#volume-bar input");
const musicPlayer = document.querySelector("#music-player");

// VOLUME CONTROL

// Set the initial volume to 1 (100%)

audioTags.forEach((tag) => {
  tag.volume = 1;
});

volumeBar.addEventListener("input", () => {
  const volume = parseFloat(volumeBar.value);
  audioTags.forEach((tag) => {
    tag.volume = volume;
  });
});

// SOME STARTING CONDITIONS

let currentIndex = 0;
let isShuffle = false;
let isRepeat = false;


function play(audioTag, playBtn, pauseBtn) {
  // Pause any other playing audio tags
  audioTags.forEach((tag) => {
    if (tag !== audioTag && !tag.paused) {
      tag.pause();
      const index = Array.from(audioTags).indexOf(tag);
      playBtns[index].style.display = "block";
      pauseBtns[index].style.display = "none";
    }
  });

  if (audioTag.paused) {
    audioTag.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    mainPlay.style.display = "none";
    mainPause.style.display = "block";
  } else {
    audioTag.pause();
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    mainPlay.style.display = "block";
    mainPause.style.display = "none";
  }
}

function playByIndex(index) {
  const audioTag = audioTags[index];
  const playBtn = playBtns[index];
  const pauseBtn = pauseBtns[index];
  play(audioTag, playBtn, pauseBtn);
  currentIndex = index;
}

playBtns.forEach((playBtn, index) => {
  const audioTag = audioTags[index];
  const pauseBtn = pauseBtns[index];
  playBtn.addEventListener("click", () => {
    play(audioTag, playBtn, pauseBtn);
    currentIndex = index;
    musicPlayer.style.display = "block";
  });
});

pauseBtns.forEach((pauseBtn, index) => {
  const audioTag = audioTags[index];
  pauseBtn.addEventListener("click", () => {
    play(audioTag, playBtns[index], pauseBtn);
    currentIndex = index;
  });
});

// MAIN BOTTOM PLAYER EVENTS

mainPlay.addEventListener("click", () => {
  const audioTag = document.querySelector("audio:not([paused])");
  const index = Array.from(audioTags).indexOf(audioTag);
  playByIndex(index);
});

mainPause.addEventListener("click", () => {
  const audioTag = document.querySelector("audio:not([paused])");
  const index = Array.from(audioTags).indexOf(audioTag);
  playByIndex(index);
});

// SHUFFLE AND REPEAT ACTIONS

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});

function getRandomIndex() {
  let index = Math.floor(Math.random() * audioTags.length);
  while (index === currentIndex) {
    index = Math.floor(Math.random() * audioTags.length);
  }
  return index;
}

backwardBtn.addEventListener("click", () => {
  let newIndex;
  if (isShuffle) {
    newIndex = getRandomIndex();

  } else {
    newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = audioTags.length - 1;
    }
  }
  playByIndex(newIndex);
});

forwardBtn.addEventListener("click", () => {
  let newIndex;
  if (isShuffle) {
    newIndex = getRandomIndex();
  } else {
    newIndex = currentIndex + 1;
    if (newIndex >= audioTags.length) {
      newIndex = 0;
    }
  }
  playByIndex(newIndex);
});

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
});

audioTags.forEach((audioTag) => {
  audioTag.addEventListener("ended", () => {
    if (isRepeat) {
      playByIndex(currentIndex);
    } else {
      let newIndex = currentIndex + 1;
      if (newIndex >= audioTags.length) {
        newIndex = 0;
      }
      playByIndex(newIndex);
    }
  });
});

// PROGRESS BAR

// audioTags.forEach((tag) => {
//   tag.addEventListener("timeupdate", () => {
//     updateProgressBar(tag);
//   });
// });

// function updateProgressBar(audioTag) {
//   const progressBar = document.querySelector("#progress-bar input");
//   const progress = (audioTag.currentTime / audioTag.duration) * 100;
//   progressBar.style.width = `${progress}%`;
// }

// const progressBar = document.querySelector("#progress-bar input");

// progressBar.addEventListener("click", (e) => {
//   const posX = e.clientX - progressBar.getBoundingClientRect().left;
//   const width = progressBar.offsetWidth;
//   const duration = audioTags[currentIndex].duration;
//   const seekTime = (posX / width) * duration;
//   audioTags[currentIndex].currentTime = seekTime;
// });
