// Simple placeholder interaction
const input = document.querySelector("input");

input.addEventListener("focus", () => {
    input.style.boxShadow = "0 0 10px rgba(255,0,0,0.6)";
});

input.addEventListener("blur", () => {
    input.style.boxShadow = "none";
});
