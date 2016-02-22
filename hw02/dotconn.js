/*===================

Roy Xu
02/11/16

====================*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var button = document.getElementById("clear");
//stores last clicked value
var x;
var y;
var RADIUS = 5;

button.addEventListener("click", function(e) {
  e.preventDefault();
  //uses the canvas height and width to ensure any size canvas will be cleared
  ctx.clearRect(0, 0, c.width, c.height);
  //resets last clicked to null
  x = null;
  y = null;
});

c.addEventListener("click", function(e) {
  e.preventDefault();
  //connects dot if you have clicked already
  if (x !== null && y !== null) {
    connectDot(x, y, e.offsetX, e.offsetY);
  }
  x = e.offsetX;
  y = e.offsetY;
  drawDot(x, y);
});

function drawDot(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();
}
function connectDot(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
