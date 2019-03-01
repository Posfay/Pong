const UTO_VELOCITY = 20;
const UTO_HEIGHT = 150;
const UTO_WIDTH = 40;
const UTO_DISTANCE_TO_SCREEN = 5;
const GOLYO_VELOCITY = 13;
const GOLYO_MIN_VELOCITY = 9;
const Y_VEL_RANGE = 8;
const MIN_Y_VEL = 4;
const GOLYO_DIAMETER = 15;
const HANYAD_RESZE_YVEL_VALTOZIK = 4;

let counter = 0;
let GOLYO_KEZD_X;
let GOLYO_KEZD_Y;
const BAL = true;
const JOBB = false;
let showBestBoolean = false;
let gen = 1;
let kezdY;
let isGameRunning = false;
let leftScore = 0;
let rightScore = 0;
let allTimeBestShowing = false;
let bestVersusCurrent = false;

let kezdBalUto, kezdJobbUto;
let golyo;
let golyoPause;


function setup() {
  createCanvas(800,600);
  kezdY = (height / 2) - (UTO_HEIGHT / 2);
  kezdBalUto = new Uto(BAL);
  kezdJobbUto = new Uto(JOBB);
  GOLYO_KEZD_X = width / 2;
  GOLYO_KEZD_Y = height / 2;
  golyo = new Golyo();
}

function draw() {
  if (isGameRunning) {

    if (keyIsDown(UP_ARROW)) {
      kezdJobbUto.moveUp();
    }
    if (keyIsDown(DOWN_ARROW)) {
      kezdJobbUto.moveDown();
    }
    if (keyIsDown(87)) {
      kezdBalUto.moveUp();
    }
    if (keyIsDown(83)) {
      kezdBalUto.moveDown();
    }

    background(0);
    kezdBalUto.update();
    kezdJobbUto.update();
    golyo.update(kezdBalUto,kezdJobbUto);

    if (golyo.left < 0) {
      golyo = new Golyo();
      rightScore++;
    } else if (golyo.right > width) {
      golyo = new Golyo();
      leftScore++;
    }

    strokeWeight(5);
    fill(255);
    line(width/2, 0, width/2, height);
    strokeWeight(1);
    kezdBalUto.show();
    kezdJobbUto.show();
    golyo.show();
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textAlign(CENTER);
    textSize(32);
    text(leftScore, width / 2 - 60, 50);
    text(rightScore, width / 2 + 60, 50);
    stroke(255);
    strokeWeight(1);
    fill(255);
    textSize(13);


  } else {
    background(0);

    
  }
}

function keyPressed() {
  if (keyCode == ENTER) {
    isGameRunning = !isGameRunning;
    rightScore = 0;
    leftScore = 0;
  }
}
