// Mikian Musser
// https://p5js.org/reference/

var bird;

function setup() {
  createCanvas(500, 500);
  bird = new Bird();
}

function draw() {
  background(151);
  bird.show();
  bird.fly();
  bird.update();
}