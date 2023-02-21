// const musicPlayer = document.querySelector("#music-player");
// const playPauseBtn = document.querySelector("#play-pause");
// const playPauseIcon = document.querySelector("#play-pause-icon");
// const songTitle = document.querySelector("#song-title");
// const songArtist = document.querySelector("#song-artist");
// const currentTime = document.querySelector("#current-time");
// const durationTime = document.querySelector("#duration-time");
// const repeatBtn = document.querySelector("#repeat-btn");
// const shuffleBtn = document.querySelector("#shuffle-btn");
// const audioPlayer = document.querySelector("#audio-player");

// let isPlaying = false;
// let songs = [
//   {
//     title: "All Eyez on Me",
//     artist: "2Pac",
//     src: "TEST/alleyezonme.mp3",
//   },
//   {
//     title: "Hit 'Em Up",
//     artist: "2Pac",
//     src: "TEST/hitemup.mp3",
//   },
//   {
//     title: "Hennessy",
//     artist: "2Pac",
//     src: "TEST/hennessy.mp3",
//   },
//   {
//     title: "Lord Knows",
//     artist: "2Pac",
//     src: "TEST/lordknows.mp3",
//   },
//   {
//     title: "Papa'z Song",
//     artist: "2Pac",
//     src: "TEST/papazsong.mp3",
//   },
// ];
// let currentIndex = 0;
// let isShuffling = false;
// let isRepeating = false;

// function togglePlayPause() {
//   if (isPlaying) {
//     audioPlayer.pause();
//     playPauseIcon.classList.remove("gg-pause-button");
//     playPauseIcon.classList.add("gg-play-button");
//   } else {
//     audioPlayer.play();
//     playPauseIcon.classList.remove("gg-play-button");
//     playPauseIcon.classList.add("gg-pause-button");
//   }
//   isPlaying = !isPlaying;
// }

// function loadSong(index) {
//   currentIndex = index;
//   const { title, artist, src } = songs[index];
//   songTitle.textContent = title;
//   songArtist.textContent = artist;
//   audioPlayer.src = src;
//   audioPlayer.load();
// }

// function formatTime(seconds) {
//   const min = Math.floor(seconds / 60);
//   const sec = Math.floor(seconds % 60);
//   return `${min}:${sec.toString().padStart(2, "0")}`;
// }

// function updateCurrentTime() {
//   currentTime.textContent = formatTime(audioPlayer.currentTime);
// }

// function updateDurationTime() {
//   durationTime.textContent = formatTime(audioPlayer.duration);
// }

// function handleEnded() {
//   if (isRepeating) {
//     audioPlayer.currentTime = 0;
//     audioPlayer.play();
//   } else if (isShuffling) {
//     const randomIndex = Math.floor(Math.random() * songs.length);
//     loadSong(randomIndex);
//     audioPlayer.play();
//   } else if (currentIndex < songs.length - 1) {
//     loadSong(currentIndex + 1);
//     audioPlayer.play();
//   } else {
//     isPlaying = false;
//     playPauseIcon.classList.remove("gg-pause-button");
//     playPauseIcon.classList.add("gg-play-button");
//   }
// }

// function shuffleSongs() {
//   isShuffling = !isShuffling;
//   shuffleBtn.classList.toggle("active");
// }

// function repeatSong() {
//   isRepeating = !isRepeating;
//   repeatBtn.classList.toggle("active");
// }

// playPauseBtn.addEventListener("click", togglePlayPause);

// audioPlayer.addEventListener("loadedmetadata", updateDurationTime);
// audioPlayer.addEventListener("timeupdate", updateCurrentTime);
// audioPlayer.addEventListener("ended", handleEnded);

// shuffleBtn.addEventListener("click", shuffleSongs);
