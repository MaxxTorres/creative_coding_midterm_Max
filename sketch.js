let scene;
let red;
let red_x;
let red_y;
let red_size;
let s1_angle;
let s1_x;
let s1_y;
let s2_circles = [];
let timeline_x;
let s2_back;
let s2_forward;
let s3_red_diff;
let s3_red_diff_bg;

function setup() {
  createCanvas(800,800);
  background(0);
  frameRate(30);
  red = color(230, 0, 0);
  blue = color(4,143,224);
  red_size = 100;
  scene = 1;
  red_x = 200;
  red_y = 200;
  // SCENE1 //////
  s1_angle = -90;
  // SCENE2 //////
  timeline_x = 0;
  s2_back = 10;
  s2_forward = 2.5;
  // SCENE3 //////
  s3_red_diff = 0;
  s3_red_diff_bg = 0;
}

function draw() {
  print(scene);
  print(red_size);
  if (scene == 1) {
    background(0);
    createClock();
    rotateLine();
    strokeWeight(1);
    fill(red);
    ellipse(red_x,red_y,red_size,red_size);
    if (frameCount >= 300) {
      red_x += 20;
      red_y += 7;
    }
    if (red_x > 700) {
      scene = 2;
    }
  }
  else if (scene == 2) {
    frameRate(20);
    background(0);
    strokeWeight(1);
    createTimeLine();
    stroke(0);
    fill(255);
    ellipse(100,400,80,100);
    ellipse(100,350,50,50);
    fill(red);
    ellipse(red_x,red_y,red_size,red_size);
    red_x -= s2_forward;
    if (s2_circles.length < 15) {
      s2_circles.push(new Circle());
    }
    for (let i = 0; i < s2_circles.length; i++){
      (s2_circles[i]).display();
      (s2_circles[i]).update();
      if((s2_circles[i]).isDead()) {
        s2_circles.splice(i,1);
      }
    }
    if (red_x <= 210) {
      s2_back += 5;
      red_x += s2_back;
      s2_forward += 1;
    }
    if(frameCount >= 750) {
      scene = 3;
    }
  }
  else if (scene == 3) {
    background(0+s3_red_diff_bg,0,0);
    stroke(0);
    fill(255,255-s3_red_diff,255-s3_red_diff);
    ellipse(100,400,80,100);
    ellipse(100,350,50,50);
    noStroke();
    fill(red);
    ellipse(red_x,red_y,red_size,red_size);
    red_x -= 0.5;
    red_size += 1;
    if (red_size >= 290) {
      s3_red_diff += 5;
    }
    if (red_size >= 350) {
      s3_red_diff_bg += 5;
    }
    if (s3_red_diff_bg >= 250) {
      //scene = 1;
      background(0);
    }
  }
}

// SCENE1 ///////////////////////////////////////////
function createClock() {
  fill(255);
  ellipse(400,400,400,400);
  stroke(0);
  strokeWeight(5);
  line(400,220,400,240);
  line(400,580,400,560);
  line(220,400,240,400);
  line(580,400,560,400);
  fill(blue);
  ellipse(400,170,40,40);
  ellipse(400,630,40,40);
  ellipse(170,400,40,40);
  ellipse(630,400,40,40);
}
function rotateLine() {
  s1_x = 400 + 150 * Math.cos(s1_angle * Math.PI / 180);
  s1_y = 400 + 150 * Math.sin(s1_angle * Math.PI / 180);
  line(400,400,s1_x,s1_y);
  if (s1_angle >= 220) {
    s1_angle -= 2;
  }
  else {
    s1_angle += 1.5;
  }
}
/////////////////////////////////////////////////////


// SCENE2 ///////////////////////////////////////////
class Circle {
  constructor() {
    this.x = random(200,750);
    this.y = random(50,750);
    this.opac = 255;
    this.size = random(50,150);
  }
  update() {
    this.opac -= 5;
    this.x -= 5;
  }
  isDead() {
    if(this.opac <= 0) {
      return true;
    }
    else {
      return false; 
    }
  }
  display() {
    noStroke();
    fill(4,143,224,this.opac);
    ellipse(this.x,this.y,this.size,this.size);
  }
}
function createTimeLine() {
  stroke(255);
  strokeWeight(2);
  timeline_x += 5;
  line(0,700,800,700);
  line(200-timeline_x,680,200-timeline_x,720);
  line(400-timeline_x,680,400-timeline_x,720);
  line(600-timeline_x,680,600-timeline_x,720);
  line(800-timeline_x,680,800-timeline_x,720);
  if(timeline_x == 200) {
    timeline_x = 0;
  }
}
/////////////////////////////////////////////////////