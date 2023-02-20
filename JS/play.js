// FUNCTION PLAY/STOP //

const pauseBtn = document.getElementById("pausebutton")
const playBtn = document.getElementById("playbutton")

function play() {
    const title1 = document.getElementById("audio");
    if(audio.paused){
      audio.play();
      playBtn.style.display = "none"
      pauseBtn.style.display = "block"
      pauseBtn.style.cursor = "pointer"
    } else {
      audio.pause();
      playBtn.style.display = "block"
      pauseBtn.style.display = "none"
    }
  }