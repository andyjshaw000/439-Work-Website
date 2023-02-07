function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  for (let i = 0; i < windowHeight; i++) {
    line(i, 2 * i, 1000 * i, 2* i);
    stroke(255);
  }
}

function draw() {}
