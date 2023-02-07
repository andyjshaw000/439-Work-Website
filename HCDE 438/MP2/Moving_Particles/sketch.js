// Code is inspired by: https://www.youtube.com/watch?v=sZBfLgfsvSk&t=17s&ab_channel=BarneyCodes
// Creates a field of vectors that flow in a random direction
// Changes direction when the mic input is loud (try clapping)
// Field is empty when the mic is quiet (try being silent)
// Changes color of vectors depending on amplitude
// Best way to see this is by playing a song

let mic;
let particles = [];
const num = 1000;
let seed = .01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  colorMode(HSB);
}

function draw() {
  background(color(0, 0.05));
  let micLevel = mic.getLevel();
  stroke(micLevel * 1200, 200, 200);
  if (micLevel < .025) {
      particles = [];
  } else {
    if (particles.length == 0) {
      newArray();
    }
    for (let i = 0; i < num; i ++) {
      let p = particles[i];
      point(p.x, p.y);
      let n = noise (p.x * seed, p.y * seed, frameCount * seed);
      let a = TAU * n;
      if (micLevel > .2) {
        seed = random(.01);
      }
      if (seed >= .005) {
        p.x += cos(a);
        p.y += sin(a);
      } else {
        p.x -= cos(a);
        p.y -= sin(a); 
      }
      if (!onScreen(p)) {
        p.x = random(width);
        p.y = random(height);
      }
    }
  }
}

function onScreen(p) {
  return p.x > 0 && p.x < width && p.y > 0 && p.y < height;
}

function newArray() {
  for (let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
}