var element = document.querySelector("li");
console.log(element);
var atribute = element.getAttribute("datakey");
console.log(atribute);
element.setAttribute("datakey","10");
console.log(element);

var h1 = document.querySelector("h1");
h1.className = "coolTitle";

console.log(element.classList);
element.classList.add("coolTitle");

element.classList.toggle("opac");
element.classList.toggle("opac");
h1.innerHTML = "<strong>BOIII</strong>";
var jello = document.querySelectorAll("li")[1];
console.log(jello);
var list = jello.parentElement;
console.log(list);
var spinach = list.children[2];
console.log(spinach);

var button = document.getElementsByTagName("button")[0];
var input = document.getElementById("item");
var listy = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        listy.appendChild(li);
        input.value = "";
}

function inputLength(){
    return input.value.length
}

function toggleDone(){
    
}

button.addEventListener("click",function(event){
    if(inputLength() > 0){
        createListElement();
    }
});

input.addEventListener("keypress",function doit(event){
    if(inputLength() > 0 && event.keyCode ===13 ){
        createListElement();
    }
});

