let scene;
let red;
let s1_angle;
let s1_x;
let s1_y;

function setup() {
  createCanvas(800,800);
  background(0);
  frameRate(30);
  red = color(230, 0, 0);
  scene = 1;
  // SCENE1 //////
  s1_angle = -90;
}

function draw() {
  if (scene == 1) {
    createClock();
    rotateLine();
    fill(red);
    ellipse(200,200,100,100);
    if (frameCount == 380) {
      scene = 2;
    }
  }

}

// SCENE1 ////////////////////////////////////////

function createClock() {
  fill(255);
  ellipse(400,400,400,400);
  stroke(0);
  strokeWeight(5);
  line(400,220,400,240);
  line(400,580,400,560);
  line(220,400,240,400);
  line(580,400,560,400);
}
function rotateLine() {
  s1_x = 400 + 150 * Math.cos(s1_angle * Math.PI / 180);
  s1_y = 400 + 150 * Math.sin(s1_angle * Math.PI / 180);
  line(400,400,s1_x,s1_y);
  if (s1_angle == 220) {
    s1_angle -= 2;
  }
  else {
    s1_angle += 1;
  }
  print(frameCount);
}