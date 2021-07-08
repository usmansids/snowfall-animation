var backgroundImage

function preload(){
  backgroundImage=loadImage("snow2.jpg")

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}