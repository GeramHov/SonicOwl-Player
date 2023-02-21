const btn = document.getElementById("theme");
const userIcone = document.getElementById("usericon");
const communityBtn = document.getElementById("communitybutton")

btn.addEventListener("click", function () {
    document.body.classList.toggle("alternate");
    userIcone.style.border = "1px solid #332d2d";
    communityBtn.classList.remove("text-white");
    communityBtn.classList.add("text-dark");
});