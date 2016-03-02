var svg = document.getElementById("vimage");
var w3 = "http://www.w3.org/2000/svg";

function censorCheck(svg) {
  var signatureBox = Rectangle(325, 170, 225, 27, "black", 2, 1, "transparent", 1);
  var routingBox = Rectangle(38, 218, 128, 26, "black", 2, 1, "transparent", 1);
  var accountBox = Rectangle(171, 218, 128, 26, "black", 2, 1, "transparent", 1);
}

function Check(svg) {
  var check = Rectangle(0, 0, 600, 275, "black", 1, 0.5, "blue", 0.1);
  var outline = Rectangle(20, 20, 560, 235, "black", 1, 0.2, "none", 1);
  var moneyOutline = Rectangle(463, 93, 105, 25, "black", 2, 0.5, "none");
  var checkLogo = Text("Tea Time", 60, 60, "black", 0.4, 30, "800");
  var date = Text("DATE", 380, 60, "black", 0.4, 12, "700");
  var checkNumber = Text("1010", 530, 40, "black", 0.5, 14, "700");
  var payToThe = Text("PAY TO THE", 42, 100, "black", 0.4, 12, "700");
  var orderOf = Text("ORDER OF", 42, 115, "black", 0.4, 12, "700");
  var moneySymbol = Text("$", 440, 115, "black", 0.5, 26, "800");
  var dollars = Text("DOLLARS", 465, 160, "black", 0.4, 12, "700");
  var memo = Text("MEMO", 42, 200, "black", 0.4, 12, "700");
  var signatureX = Text("X", 305, 195, "black", 0.2, 24, "700");
  var security = Text("Security", 540, 143, "black", 0.4, 7, "700");
  var features = Text("Features", 540, 151, "black", 0.4, 7, "700");
  var detailsOn = Text("Details On", 540, 159, "black", 0.4, 7, "700");
  var back = Text("Back", 540, 167, "black", 0.4, 7, "700");
  var micrNumbers = MicrText("a123456789a 0123456789C  1010", 42, 235, "black", 0.4, 20, "700");
  var lock = FontAwesome("\uf023", 525, 160, "black", 0.4, 18, "700");
  var payToLine = Line(115, 115, 430, 115, "black", 2, 0.5);
  var payToLineClose = Line(431, 116, 431, 105, "black", 2, 0.5);
  var dateLine = Line(415, 60, 530, 60, "black", 2, 0.5);
  var moneyLine = Line(42, 160, 460, 160, "black", 2, 0.5);
  var memoLine = Line(85, 200, 260, 200, "black", 2, 0.5);
  var signatureLine = Line(300, 200, 555, 200, "black", 2, 0.5);

  svg.appendChild(check);
  svg.appendChild(outline);
  svg.appendChild(security);
  svg.appendChild(features);
  svg.appendChild(detailsOn);
  svg.appendChild(back);
  svg.appendChild(lock);
  svg.appendChild(micrNumbers);
  svg.appendChild(signatureLine);
  svg.appendChild(signatureX);
  svg.appendChild(memoLine);
  svg.appendChild(memo);
  svg.appendChild(dollars);
  svg.appendChild(moneyLine);
  svg.appendChild(moneyOutline);
  svg.appendChild(moneySymbol);
  svg.appendChild(checkNumber);
  svg.appendChild(dateLine);
  svg.appendChild(date);
  svg.appendChild(payToLineClose);
  svg.appendChild(payToLine);
  svg.appendChild(orderOf);
  svg.appendChild(payToThe);
  svg.appendChild(checkLogo);
}

function checkInfo(svg) {
  var name = HandWriting("Roy Xu", 140, 108, "black", 1, 30, 400);
  var date = HandWriting("12 Dec 2015", 420, 57, "black", 1, 20, 400);
  var money = HandWriting("One Hundred Thousand Dollars", 67, 155, "black", 1, 28, 400);
  var dollars = HandWriting("100,000", 480, 112, "black", 1, 26, 400);
  var memo = HandWriting("Koding Hackathon", 95, 195, "black", 1, 20, 400);
  var signature = Signature("Roy Xu", 350, 195, "black", 1, 32, 400);

  svg.appendChild(signature);
  svg.appendChild(memo);
  svg.appendChild(dollars);
  svg.appendChild(money);
  svg.appendChild(date);
  svg.appendChild(name);
}

//Credit Card
function creditCard(svg) {
  var outline = RoundedRectangle();
}

//SVG Element Classes
function Rectangle(x, y, width, height, stroke, strokewidth, strokeopacity, fill, fillopacity) {
  var rect = document.createElementNS(w3, "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("stroke", stroke);
  rect.setAttribute("stroke-width", strokewidth);
  rect.setAttribute("stroke-opacity", strokeopacity);
  rect.setAttribute("fill", fill);
  rect.setAttribute("fill-opacity", fillopacity);
  return rect;
}
function RoundedRectangle(x, y, width, height, rx, ry, stroke, strokewidth, strokeopacity, fill, fillopacity) {
  var rect = document.createElementNS(w3, "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("rx", x);
  rect.setAttribute("ry", y);
  rect.setAttribute("stroke", stroke);
  rect.setAttribute("stroke-width", strokewidth);
  rect.setAttribute("stroke-opacity", strokeopacity);
  rect.setAttribute("fill", fill);
  rect.setAttribute("fill-opacity", fillopacity);
  return rect;
}
function Text(textContent, x, y, fill, fillopacity, fontsize, fontweight) {
  var text = document.createElementNS(w3, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fill", fill);
  text.setAttribute("fill-opacity", fillopacity);
  text.setAttribute("font-size", fontsize);
  text.setAttribute("font-weight", fontweight);
  text.setAttribute("font-family", "Open Sans, sans-serif");
  text.textContent = textContent;
  return text;
}
function MicrText(textContent, x, y, fill, fillopacity, fontsize, fontweight) {
  var text = document.createElementNS(w3, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fill", fill);
  text.setAttribute("fill-opacity", fillopacity);
  text.setAttribute("font-size", fontsize);
  text.setAttribute("font-weight", fontweight);
  text.setAttribute("font-family", "micr");
  text.setAttribute("letter-spacing", "1px");
  text.textContent = textContent;
  return text;
}
function HandWriting(textContent, x, y, fill, fillopacity, fontsize, fontweight) {
  var text = document.createElementNS(w3, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fill", fill);
  text.setAttribute("fill-opacity", fillopacity);
  text.setAttribute("font-size", fontsize);
  text.setAttribute("font-weight", fontweight);
  text.setAttribute("font-family", "Indie Flower, cursive");
  text.textContent = textContent;
  return text;
}
function Signature(textContent, x, y, fill, fillopacity, fontsize, fontweight) {
  var text = document.createElementNS(w3, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fill", fill);
  text.setAttribute("fill-opacity", fillopacity);
  text.setAttribute("font-size", fontsize);
  text.setAttribute("font-weight", fontweight);
  text.setAttribute("font-family", "Pinyon Script, cursive");
  text.textContent = textContent;
  return text;
}
function FontAwesome(textContent, x, y, fill, fillopacity, fontsize, fontweight) {
  var text = document.createElementNS(w3, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fill", fill);
  text.setAttribute("fill-opacity", fillopacity);
  text.setAttribute("font-size", fontsize);
  text.setAttribute("font-weight", fontweight);
  text.setAttribute("font-family", "FontAwesome");
  text.textContent = textContent;
  return text;
}
function Line(x1, y1, x2, y2, stroke, strokewidth, strokeopacity) {
  var line = document.createElementNS(w3, "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", stroke);
  line.setAttribute("stroke-width", strokewidth);
  line.setAttribute("stroke-opacity", strokeopacity);
  return line;
}
Check(svg);
checkInfo(svg);
censorCheck(svg);
