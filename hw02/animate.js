/*===================

Roy Xu
02/11/16

====================*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var button = document.getElementById("circle");
//stores maximum and minimum values
var MIN_RADIUS = 0;
var MAX_RADIUS = c.width / 2;
var CHANGE_AMOUNT = 2;
var current_radius = 0;
var expand = true;
ctx.fillStyle = "red";
ctx.strokeStyle = "red";

function drawCircle() {
  ctx.clearRect(0, 0, c.width, c.height);
  if (expand) {
    current_radius += CHANGE_AMOUNT;
  }
  else {
    current_radius -= CHANGE_AMOUNT;
  }
  if (current_radius === MIN_RADIUS) {
    expand = true;
  }
  else if (current_radius === MAX_RADIUS) {
    expand = false;
  }
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, current_radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();

  window.requestAnimationFrame(drawCircle);
}

button.addEventListener("click", drawCircle);
