var gamestate = "serve";
var startImg, gameoverImg, bgImg, logoImg;

function preload() {
  startImg = loadImage("images/start.png");
  gameoverImg = loadImage("images/gameOver.png");
  bgImg = loadImage("images/bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  form = new Form()
}

function draw() {
  

  drawSprites();

  if (gamestate === "serve") {
    background(bgImg);
    form.display();
    console.log("Lollllllllllllllllll");
  }
  else if (gamestate === "Play") {
    background(0)
    
  }
}

