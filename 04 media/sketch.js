
let img; 

function preload() {
  img = loadImage('cheez.webp'); // Load image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.filter (THRESHOLD);
  img.filter (INVERT)
  img.filter (BLUR, 0.05)
}

function draw() {
   image(img, 25, 25,);
  // Displays half size image at x/y (0, 100)
  //image(img, 0, 100, img.width/2, img.height/2);
}
