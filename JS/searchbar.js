// GETTING DESIRED TARGETS //

const searchBar = document.getElementById("searchinput");
const middleColumn = document.getElementById("middlecolumn");
const searchButton = document.getElementById("searchbutton");
const mainSection = document.getElementById("main");
const home = document.getElementById("home");
const explore = document.getElementById("explore");
const library = document.getElementById("library");
const searchButtonIcon = document.getElementById("searchbuttonicon");

// SEARCH BAR APPEAR ONCLICK //

searchButton.addEventListener("click", function (event) {
  home.style.display = "none";
  explore.style.display = "none";
  library.style.display = "none";
  searchButton.style.display = "none";
  searchButtonIcon.style.display = "none";
  searchBar.style.display = "block";
  event.preventDefault();
});

// SEARCH BAR DISAPEAR ONCLICK ELSEWHERE //

mainSection.addEventListener("click", function () {
  home.style.display = "block";
  explore.style.display = "block";
  library.style.display = "block";
  searchButton.style.display = "block";
  searchButtonIcon.style.display = "block";
  searchBar.style.display = "none";
});

// BODY DARK/LIGHT THEME ALTERNATE //

const btn = document.getElementById("light");
const userIcone = document.getElementById("usericon");

btn.addEventListener("click", function () {
  document.body.classList.toggle("alternate");
  userIcone.style.border = "1px solid #332d2d";
});
