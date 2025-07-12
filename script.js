const text = "Front-End Developer | Learner | Designer";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;