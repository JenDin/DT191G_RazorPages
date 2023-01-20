const bgBtn = document.querySelector("#bg-btn");
const header = document.querySelector("#top-container");
const footer = document.querySelector("#footer");
const colors = ["#98c1d9", "#a8dadc", "#84a98c", "#b392ac", "#e2b4bd"];

bgBtn.addEventListener("click", randomizeBgColor);

// Randomize background color on header and footer
function randomizeBgColor() {
    const random = Math.floor(Math.random() * colors.length);

    header.style.background = colors[random];
    footer.style.background = colors[random];
};