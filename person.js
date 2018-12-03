// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person(x, y) {
  this.pos = createVector(50, height);
  this.vel = createVector(1.5, 0);
  this.acc = createVector(0, 0);
  //this.mass= m;
  
  

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  //the person
  this.display = function() {
    fill(255, 150, 39);
    stroke(255, 150, 39);
    rect(this.pos.x ,this.pos.y - 40,20,40);
    ellipse(this.pos.x + 10, this.pos.y - 60, 35, 35);
    
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
    }
 	}
}
