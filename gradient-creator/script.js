var css = document.getElementsByTagName("h3");
var bod = document.getElementById("gradient");
var picker1 = document.querySelector(".color1");
var picker2 = document.querySelector(".color2");

function setGradient(){
    bod.style.background = "linear-gradient(to right, "+ picker1.value+", "+ picker2.value+")";
    css[0].textContent = "linear-gradient(to right, "+ picker1.value+", "+ picker2.value+")";
}

picker1.addEventListener("input", setGradient);

picker2.addEventListener("input", setGradient);

