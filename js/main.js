var button = document.querySelector(".reference");
var slider = document.querySelector("#slide-reference");

function sliderToggle() {
  slider.classList.toggle("active");
  button.classList.toggle("active");
}

button.addEventListener("click", sliderToggle);

/* Dragging the components of the Student Activity Center to their targets */
/* Fetch the elements */

var rectangle = document.querySelector("#sac-body");
var circle = document.querySelector("#sac-cricle");
var square = document.querySelector("#sac-square");
var triangle = document.querySelector("#sac-triangle");

function rectangleDrag() {
  rectangle.classList.drag("active");
}
