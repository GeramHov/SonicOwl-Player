const btn = document.getElementById("theme");
const userIcone = document.getElementById("usericon");
const exploreButton = document.getElementById("explorebutton")

btn.addEventListener("click", function () {
    document.body.classList.toggle("alternate");
    userIcone.style.border = "1px solid #332d2d";
    exploreButton.classList.remove("text-white");
    exploreButton.classList.add("text-dark");
});