var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
 //Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(800,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.scale=0.3;
  sea.velocityX=-3;
  sea.addImage(seaImg);
  sea.x=sea.width/2

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  //ship.x=50
}

function draw() {
  background(410);
  
  if (sea.x<0) {
  sea.x=400
  }

  console.log(sea.x)
    
  drawSprites();
}
