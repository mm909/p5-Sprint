// Mikian Musser
// https://p5js.org/reference/

var circles = [];
function setup(){
  createCanvas(500,500);
  var x = random(width);
  var y = random(height);
  var r = 1;
  circles.push(new Circle(x,y,r));
}

function draw(){
  colorMode(RGB)
  background(151);
  var valid = false;
  while(!valid){
    var x = random(width);
    var y = random(height);
    valid = isValid(x,y)
  }
  var r = 1;
  circles.push(new Circle(x,y,r));
  for(var i = 0; i < circles.length; i++){
    circles[i].show();
    circles[i].grow();
    circles[i].setGrowRate();
  }
}

function isValid(x,y){
  var valid = false;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x,y,c.x,c.y);
    if(d < c.r){
      valid = false
      break;
    } else {
      valid = true;
    }
  }
  return valid;
}
