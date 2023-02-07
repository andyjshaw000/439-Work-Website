function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  for (let i = 0; i < 50; i++) {
    line(
      random(windowWidth),
      random(windowHeight),
      random(windowWidth),
      random(windowHeight)
    );
    stroke(random(255), random(255), random(255));
  }
}

function draw() {}
