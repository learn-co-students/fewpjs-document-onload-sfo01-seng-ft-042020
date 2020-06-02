// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  updateText();
})

const text = document.getElementById("text");

function updateText() {
  text.textContent = 'This is really cool!'
}