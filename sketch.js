var  street,  streetImg, running, runningImgs;
var  heartImg, heartGroup;
var armyBombImg, armyBombGroup;
var invisibleGround;
var score = 0;
var stoneImg, stoneGroup;
var gameState = PLAY;


function preload () {
  streetImg= loadImage("images/street.jpg");
  runningImgs= loadAnimation("images/running1.png", "images/running2.png", "images/running3.png", "images/running4.png", "images/running5.png", "images/running6.png", "images/running7.png");
  heartImg= loadImage("images/heart.png");
  armyBombImg=loadImage("images/armybomb.png");
  stoneImg=loadImage("images/stone.png");
}

function setup() {
  createCanvas(800,400);
  running= createSprite(50, 320, 50, 50);
  running.addAnimation("btsRunning", runningImgs);
  running.scale= 0.5;
  running.frameDelay = 3;
  

 street= createSprite(800,180,0,0);
 street.addImage("street2", streetImg);
 street.x= width/2;
 street.velocityX=-9;

 invisibleGround = createSprite(500,400,1000,10);  
 invisibleGround.shapeColor = "grey"

 



 

  
  heartGroup= new Group();
  armyBombGroup= new Group();
  stoneGroup= new Group();
  
 
  
}

function draw() {
  background("black");
  if (street.x<130) {
    street.x=street.width/2;
  }
  drawSprites();

  spawnHeart();
  spawnBomb();
  spawnStone();
  heartGroup.setLifetimeEach(-1);
  armyBombGroup.setLifetimeEach(-1);
  stoneGroup.setLifetimeEach(-1);

  
  fill("black");
  textSize(30);
  text(`Score:${score}`, width - 200, 50);
  textAlign(CENTER, CENTER);

  running.y=World.mouseY;

  running.depth=street.depth;
  running.depth=running.depth+1;

  running.depth=invisibleGround.depth;
  running.depth=running.depth+1;

 
   

  
  

  

 
  
 
}


function spawnHeart() {
  if (frameCount % 100 === 0) {
    var heart = createSprite(800,height-25,22,40);
   // heart.x= Math.round(random(50,220));
    heart.addImage(heartImg);
    heart.scale = 0.05;
    heart.lifetime = 300;
    heart.velocityX= -3;
    heartGroup.add(heart);
  }
  
}

function spawnBomb() {
  if (frameCount % 400 === 0) {
    var bomb = createSprite(950,height-25,20,30);
    //bomb.x= Math.round(random(50,220));
    bomb.addImage(armyBombImg);
    bomb.scale = 0.1;
    bomb.lifetime = 300;
    bomb.velocityX= -3;
    armyBombGroup.add(bomb);
  }
  
}

function spawnStone() {
  if (frameCount % 200 === 0) {
    var stone = createSprite(700,height-25,20,30);
    stone.addImage(stoneImg);
    stone.scale = 0.2;
    stone.lifetime = 300;
    stone.velocityX= -3;
    stoneGroup.add(stone);
  }
  
}

