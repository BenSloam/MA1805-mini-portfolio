let theText = ['blue', 'feta', 'gouda', 'brie', 'camembert', 'jarlsberg', 'mozzarella', 'ricotta' ];
let word = theText[0];
let i = 0;

function setup() {
  createCanvas(400, 400);
  frameRate (1);
}

function draw() {
  background(255,255,0);
  textSize(50);
  text(word, random(200,), height/2);

  word = theText[i];
  i=i+1;
  if(i>theText.length){
    i=0;
  }

  console.log(i);
}
