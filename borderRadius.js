// select element from DOM
var border = document.getElementById("p");
const btn = document.querySelector("button");

// change css style
// btn.addEventListener("click", () => {
//   console.log("Button is working");
// });

// btn.onclick = function () {
//   console.log("Button is working");
// };

function changeRadius() {
  border.style.borderTopLeftRadius = "100px";
  border.style.color = "red";
  console.log("Button is working");
}
console.log("This is my JS script");
