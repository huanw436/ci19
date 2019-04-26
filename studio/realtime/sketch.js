// let angle = 0;
// var img;

// function preload() {
//   img = loadImage('images/01.jpg');
// }

// var reset = document.createElement("div");
//     reset.innerHTML = "reset";
//     document.body.appendChild(reset);
//     reset.style.float = "right";
//     reset.style.fontSize = 25 + "px";

function setup() {
  var reset = createElement('div','reset');
  reset.mousePressed(resetSketch);
  createCanvas(displayWidth, displayHeight);
  background(255);
  noStroke();
  // fill(0, 102);
  r = random(0);
  g = random(0);
  b = random(0);
}

function resetSketch() {
  clear();
}

function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
  if (mouseIsPressed === true){
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    fill(r,g,speed,100);
    ellipse(x, y, speed, speed);
  }
  
}







