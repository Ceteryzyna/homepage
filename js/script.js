
let body = document.querySelector(".body");
let dark = document.querySelector(".dark");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");
let yellow = document.querySelector(".yellow");


button.addEventListener("click", () => {
    body.classList.toggle("dark");
    button.classList.toggle("yellow");
    themeName.innerText = body.classList.contains("dark") ? "Zapal" : "Zgaś";
});


