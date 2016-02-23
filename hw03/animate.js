/*===================

Roy Xu
02/11/16

====================*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var button = document.getElementById("circle");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");
var circleID;
var dvdID;
//Circle variables
//stores maximum and minimum values
var MIN_RADIUS = 0;
var MAX_RADIUS = c.width / 2;
var CHANGE_AMOUNT = 2;
var current_radius = 0;
var expand = true;
ctx.fillStyle = "red";
ctx.strokeStyle = "red";
//Logo variables
var logo = new Image();
logo.src = "logo_dvd.jpg";
var logo_width = 90;
var logo_height = 60;
var logo_x = c.width / 2 - logo_width / 2;
var logo_y = c.height / 2 - logo.height / 2;
var logo_left = logo_x - logo_width / 2;
var logo_right = logo_x + logo_width / 2;
var logo_top = logo_y - logo_height / 2;
var logo_bot = logo_y + logo_height / 2;
var logo_vx = 2;
var logo_vy = 2;

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

  circleID = window.requestAnimationFrame(drawCircle);
}

function drawDvd() {
  ctx.clearRect(0, 0, c.width, c.height);
  logo_right = logo_x + logo_width;
  logo_bot = logo_y + logo_height;
  if (logo_x + logo_vx < 0) {
    logo_vx *= -1;
  }
  if (logo_right + logo_vx > c.width) {
    logo_vx *= -1;
  }
  if (logo_y + logo_vy < 0) {
    logo_vy *= -1;
  }
  if (logo_bot + logo_vy > c.height) {
    logo_vy *= -1;
  }
  logo_x += logo_vx;
  logo_y += logo_vy;
  ctx.drawImage(logo, logo_x, logo_y, logo_width, logo_height);
  dvdID = window.requestAnimationFrame(drawDvd);
}

button.addEventListener("click", drawCircle);
stop.addEventListener("click", function(e) {
  e.preventDefault();
  window.cancelAnimationFrame(dvdID);
  window.cancelAnimationFrame(circleID);
});
dvd.addEventListener("click", drawDvd);
