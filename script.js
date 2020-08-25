var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var result = document.getElementById("current-background");
var body = document.getElementById("generator-body");
var button = document.getElementById("random-button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    result.textContent = body.style.background + ";";
};
function generateRandomColor() {
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    return randomColor;
};
function setRandomColor() {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
};


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);
