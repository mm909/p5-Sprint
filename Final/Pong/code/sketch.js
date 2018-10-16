// Mikian Musser
// Code Central
// p5 Sprint
// https://p5js.org/reference/

var ballx = 0;
var bally = 0;
var ballxSpeed = 4;
var ballySpeed = 5;
var ballSize = 20;
var ballColor = 0;

var paddlex = 0;
var paddley = 0;
var paddleSpeed = 10;
var paddleWidth = 150;
var paddleHeight = 25;
var paddleColor = 0;

function setup(){
  createCanvas(500,500);
  ballx = width / 2;
  bally = height / 2;
  ballColor = color(100,100,255)
  paddlex = width / 2;
  paddley = height - paddleHeight * 2;
  paddleColor = color(100,255,100)
}

function draw(){
  background(151);

  fill(ballColor);
  ellipse(ballx,bally,ballSize);

  ballx = ballx + ballxSpeed;
  bally = bally + ballySpeed;

  if(ballx < 0 || ballx > width){
    ballxSpeed = ballxSpeed * -1;
  }
  if(bally < 0 || bally > height){
    ballySpeed = ballySpeed * -1;
  }

  fill(paddleColor)
  rect(paddlex,paddley,paddleWidth,paddleHeight)

  if(keyIsDown(LEFT_ARROW)){
    paddlex = paddlex - paddleSpeed;
  }
  if(keyIsDown(RIGHT_ARROW)){
    paddlex = paddlex + paddleSpeed;
  }

  if(collideRectCircle(paddlex, paddley, paddleWidth, paddleHeight, ballx, bally, ballSize, ballSize)) {
    ballySpeed = ballySpeed * -1;
  }
}
