// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;

//var obstacle;

function setup() {
  createCanvas(640, 360);
  person = new Person ();

}

function keyPressed() {
  if (key === ' ') {
    var jump = createVector(0, -5.5);
    person.applyForce(jump);
  }
}

function draw() {
  
  background(220);
  
  translate(-person.pos.x + 50, 0);

  var force = createVector (0, 0.1);
  person.applyForce(force);
  
  person.update();
  person.edges();
  person.display();
  
  for(var k = 0; k < 20; k++) {
  stroke(225, 0 ,100);
  fill(225, 0 ,100);
  ellipse(k * 300 + 525, height - 80, 50, 50);
  rect(k * 300 + 500, height-50, 50, 50);
    
  }
  
}
