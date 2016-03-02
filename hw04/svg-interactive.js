var pic = document.getElementById("vimage");
var circle = document.getElementById("circle");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");
var circleID;
var dvdID;

var change = function(e) {
  e.preventDefault();
  if (this.getAttribute("fill") === "yellow"){
    this.setAttribute("fill", "green");
  }
  else {
    this.setAttribute("fill", "yellow");
  }
};

var drawDot = function(x, y) {
  var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", x);
  dot.setAttribute( "cy",  y);
  dot.setAttribute("r", "10");
  dot.setAttribute( "fill", "yellow" );
  dot.setAttribute( "stroke", "black" );
  dot.addEventListener("click", change);
  pic.appendChild( dot );
};

var drawCircle = function() {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", pic.offsetWidth / 2 );
  c.setAttribute( "cy",  pic.offsetHeight / 2);
  c.setAttribute( "fill", "red" );
  c.setAttribute( "stroke", "black" );
  pic.appendChild( c );
  var expand = true;
  var current_radius = 0;
  var animateCode = function() {
    if (expand) {
      current_radius += 2;
    }
    else {
      current_radius -= 2;
    }
    if (current_radius === 0) {
      expand = true;
    }
    else if (current_radius === 250) {
      expand = false;
    }
    c.setAttribute("r", current_radius);
    circleID = window.requestAnimationFrame(animateCode);
  };
  animateCode();
};

function drawDvd() {
  var dvd = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  logo_right = logo_x + 30;
  logo_bot = logo_y + 30;
  logo_vx = 2;
  logo_vy = 2;
  var logo_x = pic.offsetWidth / 2;
  var logo_y = pic.offsetHeight / 2;
  dvd.setAttribute( "cx", logo_x );
  dvd.setAttribute( "cy",  logo_y );
  dvd.setAttribute( "fill", "black" );
  dvd.setAttribute( "stroke", "black" );
  dvd.setAttribute( "r", 30 );
  pic.appendChild(dvd);
  var animateCode = function() {
    if (logo_x + logo_vx < 30) {
      logo_vx *= -1;
    }
    if (dvd.getAttribute("cx") > 470) {
      logo_vx *= -1;
    }
    if (logo_y + logo_vy < 30) {
      logo_vy *= -1;
    }
    if (dvd.getAttribute("cy") > 470) {
      logo_vy *= -1;
    }
    logo_x += logo_vx;
    logo_y += logo_vy;
    dvd.setAttribute( "cx", logo_x );
    dvd.setAttribute( "cy",  logo_y );
    dvdID = window.requestAnimationFrame(animateCode);
  };
  animateCode();
}

circle.addEventListener("click", drawCircle);
stop.addEventListener("click", function(e) {
  e.preventDefault();
  window.cancelAnimationFrame(dvdID);
  window.cancelAnimationFrame(circleID);
});
dvd.addEventListener("click", drawDvd);
var clicked = function(e) {
  if (e.toElement == this) {
    drawDot(e.offsetX, e.offsetY);
  }
};
pic.addEventListener("click", clicked);
