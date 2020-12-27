hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  angleMode(DEGREES);
  hrAngle = map(0,12,0,360);
  mnAngle = map(0,60,0,360);
  sc.angle = map(0,60,0,360);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);
  pop();
}