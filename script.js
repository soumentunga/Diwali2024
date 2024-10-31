window.onload = function() {
    let previewName = document.querySelector("#name");
    let name = prompt("Enter your name");
    previewName.textContent = name;
}