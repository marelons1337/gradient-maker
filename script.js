var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var result = document.getElementById("current-background");
var body = document.getElementById("generator-body")

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    result.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
