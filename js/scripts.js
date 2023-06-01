function handleSelect(event) {
    event.preventDefault();
    const selection = document.getElementById("beverage").value;
    console.log(selection);
}

window.addEventListener ("load", function() {
    document.getElementById("beverage").addEventListener("change", handleSelect);
});