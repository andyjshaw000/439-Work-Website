let mic;
let averageAudio = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  colorMode(HSB);
  for (let i = 0; i < 7; i++) {
    averageAudio.push(.015);
  }
}

function draw() {
  clear();
  background(color(255));
  let micLevel = mic.getLevel();
  averageAudio.push(micLevel);
  averageAudio.shift();
  let sum = 0;
  for (let i = 0; i < averageAudio.length; i++) {
    sum += averageAudio[i];
  }
  let average = sum / averageAudio.length;
  // for (let i = 0; i < 400; i++) {
  //   for (let j = 0; j < 10; j++) {
  circle(windowWidth / 2, windowHeight / 2, average * 5000);
  fill(average * 4500, average * 4500, average * 4500);
  //   }
  // }
  noStroke();
}