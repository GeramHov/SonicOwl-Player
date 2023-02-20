// BODY DARK/LIGHT THEME ALTERNATE //

const btn = document.getElementById("theme");
const userIcone = document.getElementById("usericon");
const homeButton = document.getElementById("homebutton")

btn.addEventListener("click", function () {
  if(btn.classList.contains("btn-light") && homeButton.classList.contains("text-white")){
    btn.classList.remove("btn-light")
    btn.classList.add("btn-dark")
    homeButton.classList.remove("text-white")
    homeButton.classList.add("text-dark")
    document.body.classList.toggle("alternate");
    userIcone.style.border = "1px solid #332d2d";
  } else if(btn.classList.contains("btn-dark") && homeButton.classList.contains("text-dark")) {
    btn.classList.add("btn-light")
    btn.classList.remove("btn-dark")
    homeButton.classList.remove("text-dark")
    homeButton.classList.add("text-white")
    document.body.classList.toggle("alternate");
  }
});
