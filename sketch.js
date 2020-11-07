
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground,groundImg;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 }

function setup() {
  createCanvas(530,300);
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  // creating monkey
  monkey = createSprite(80,230,10,10);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,265,900,10);
  ground.velocityX = 4;
  
 
  
  
 }


function draw() {
  background("white");
  
  stroke("blue");    
  textSize(20);
  fill("red");
  text("Score: ",score,100,50);
  
  stroke("yellow");
  textSize(50);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  if (keyDown("space") && monkey.y >=220 )  {
    monkey.velocityY = -15;
  }
  
      monkey.velocityY = monkey.velocityY + 0.9

  
     monkey.collide(ground);
 ground.x = ground.width /2;
  
  if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
  
  
    //console.log(monkey.y);
  spawnbanana();
  spawnobstacle();
  drawSprites();

  
}

function spawnbanana(){
  if (frameCount % 80 === 0){
    banana = createSprite(620,120, 50, 50)
    banana.addImage(bananaImage);
    banana.scale=0.05; 
    banana.y = Math.round(random(120,200));
    banana.velocityX = -5;               
    banana.lifetime = 220;
    bananaGroup.add(banana);
  }
}

function spawnobstacle(){
  if (frameCount % 200 === 0){
    obstacle = createSprite(620,253,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15; 
    obstacle.velocityX = -6;
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
  }
}
