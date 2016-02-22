var c = document.getElementById("ftb2maga");
var context = c.getContext("2d");


context.beginPath();
context.moveTo(50,50);
context.lineTo(100,100);
context.lineTo(0, 100);
context.closePath();
context.stroke();
context.fill();


context.beginPath();
context.arc(200, 200, 50, Math.PI, 2 * Math.PI);
context.stroke();
context.fill();
context.closePath();

context.font = "30px arial";
context.fillText("Hello", 300, 300);

/*
var context = c.getContext("2d")
  Specifies that we will be using the canvas in 2d. Also creates variable for
  manipulating the content of the canvas.
context.fillRect(a, b, c, d)
  Creates a rectangle with left hand corner at (a, b) with height c and width d.
context.fillStyle(color)
  Changes the fill color of the rectangle created with fillRect to specified
  color.
context.strokeRect(a, b, c, d)
  Creates a rectangle with left hand corner at (a, b) with height c and width d.
  Has a transparent background, but has the stroke color specified in
  strokeStyle.
context.strokeStyle(color)
  Changes the stroke color of the rectangle created with strokeRect to
  specified color.
context.beginPath()
  Begins a new drawing.
context.moveTo(a, b)
  Moves the current position to the coordinates (a, b).
context.lineTo(a, b)
  Creates a line from the current position to (a, b) while also changing
  the current position.
context.closePath()
  Creates a line back to the starting position.
context.stroke()
  Draws the created lines.
context.fill()
  Fills in the drawn shapes.
context.arc(a, b, c, d, e)
  Creates a circle centered at (a, b) with radius c and with a starting angle of
  d and an end angle of e. Angles are in radians.
context.font = "30px arial"
  Changes the font used by the canvas.
context.fillText(text, a, b)
  Writes the text at position (a, b).
*/
