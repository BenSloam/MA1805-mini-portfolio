function setup() {
  createCanvas(400, 400);
}
//swiss cheese with a chomp out of it :p//
function draw() {
  background(250,250,19);

  fill(500);
  circle (300, 300, 300);


  fill (500);
 
 
  circle (60, 150 ,80);
  circle (155, 200, 50);
  circle (125, 50, 50);
  circle (170, 50, 20);
  circle (100, 230, 40);
  circle (260, 50, 50);
  circle (70, 300, 90);
  circle (160, 120, 75);
  circle (300, 100, 50);
  circle (230, 110, 50);
  //^this guy here was overlapping another circle//
  //took ages finding out he was the culprit//



}
