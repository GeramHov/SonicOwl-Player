const btn = document.getElementById("theme");
const userIcone = document.getElementById("usericon");
const libraryButton = document.getElementById("librarybutton");

btn.addEventListener("click", function () {
  document.body.classList.toggle("alternate");
  userIcone.style.border = "1px solid #332d2d";
  libraryButton.classList.remove("text-white");
  libraryButton.classList.add("text-dark");
});
