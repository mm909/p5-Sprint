function Bird() {
  this.pos = createVector(50, height / 2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.gra = createVector(0, 0.1);
  this.lift = createVector(0, -0.25);
  this.d = 20;
  this.c = color(100, 255, 100);


  this.show = function() {
    ellipse(this.pos.x, this.pos.y, this.d, this.d);
  }

  this.update = function() {
    this.acc.add(this.gra)
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.fly = function() {
    if (keyIsDown(UP_ARROW)) {
      this.acc.add(this.lift);
    }
  }
}