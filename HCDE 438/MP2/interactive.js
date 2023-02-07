// Code is inspired by: https://www.youtube.com/watch?v=sZBfLgfsvSk&t=17s&ab_channel=BarneyCodes
// Creates a field of vectors that flow in a random direction
// Changes direction when the mic input is loud (try clapping)
// Field is empty when the mic is quiet (try being silent)
// Changes color of vectors depending on amplitude
// Best way to see this is by playing a song

let particles = [];
const num = 1000;
let seed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(color(0, 0.05));
  stroke(200, 200, 200);
  if (particles.length == 0) {
    newArray();
  }
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let a = TAU;
    p.x += cos(mouseX * 1000);
    p.y += sin(mouseY * 1000);
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onScreen(p) {
  return p.x > 0 && p.x < width && p.y > 0 && p.y < height;
}

function newArray() {
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}
