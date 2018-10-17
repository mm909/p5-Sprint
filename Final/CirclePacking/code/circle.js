function Circle(x_, y_, r_) {
  this.x = x_;
  this.y = y_;
  this.r = r_;
  this.color = random(255);
  this.growRate = 1;
  this.buffer = 5;

  this.show = function() {
    colorMode(HSB)
    fill(this.color, 255, 255)
    ellipse(this.x,this.y,this.r*2,this.r*2)
  }

  this.grow = function() {
    this.r += this.growRate;
  }

  this.setGrowRate = function() {
    if(this.x + this.r + this.buffer > width){
      this.growRate = 0;
    }
    if(this.x - this.r - this.buffer < 0){
      this.growRate = 0;
    }
    if(this.y + this.r + this.buffer > height){
      this.growRate = 0;
    }
    if(this.y - this.r - this.buffer < 0){
      this.growRate = 0;
    }
    for (var i = 0; i < circles.length; i++) {
      var c = circles[i]
      var d = dist(this.x, this.y, c.x, c.y)
      if(d < this.r + c.r + this.buffer  && d != 0){
        this.growRate = 0;
      }
    }
  }
}
