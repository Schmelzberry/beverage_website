let form;
let selection;
let current_beverage;

function handleSubmit(event) {
    event.preventDefault();
}

function handleSelect(event) {
    event.preventDefault();
    current_beverage.setAttribute("class", "hidden");
    current_beverage = document.getElementById(selection.value);
    current_beverage.removeAttribute("class");
}


function InitializeVariables() {
    form = document.querySelector("form");
    selection = document.getElementById("beverage");
    current_beverage = document.getElementById(selection.value);
}

function InitializeEventListeners() {
    selection.addEventListener("change", handleSelect);

}

window.onload = function() {
    InitializeVariables();
    InitializeEventListeners();

}