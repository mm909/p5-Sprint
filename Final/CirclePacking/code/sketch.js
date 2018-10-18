// Mikian Musser
// https://p5js.org/reference/

var circles = [];
var CIRCLESEACHFRAME = 20;
var ATTEMPTSEACHFRAME = 50;
var full = false;
var MAX = 600;

function setup() {
  createCanvas(500, 500);
  var x = random(width);
  var y = random(height);
  var r = 1;
  circles.push(new Circle(x, y, r));
}

function draw() {
  colorMode(RGB)
  background(151);
  var count = 0;
  if (circles.length < MAX && !full) {
    while (count != CIRCLESEACHFRAME) {
      var valid = false;
      var tries = 0;
      while (!valid) {
        var x = random(width);
        var y = random(height);
        valid = isValid(x, y)
        tries++
        if (tries > ATTEMPTSEACHFRAME) {
          full = true;
          break;
        }
      }
      var r = 1;
      circles.push(new Circle(x, y, r));
      count++;
    }
  } else {
    full = true;
  }

  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    circles[i].grow();
    circles[i].setGrowRate();
  }
}

function isValid(x, y) {
  var valid = false;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x, y, c.x, c.y);
    if (d < c.r + c.buffer) {
      valid = false
      break;
    } else {
      valid = true;
    }
  }
  return valid;
}