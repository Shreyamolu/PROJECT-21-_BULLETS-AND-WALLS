var wall,thickness;
var bullet,speed,weight;


function setup() {
  
createCanvas(1600,400);

speed = random(223,321);
weight = random(30,52);

thickness = random(22,83);

bullet = createSprite(50,200,10,10);
bullet.velocityX = speed;
bullet.shapeColor = color (255);

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);



}


function preload() {

}

function draw() {
  background("black")

  if(hasCollided(bullet,wall))
    {
        bullet.velocityX = 0;

        var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
        
        if(damage > 10)
        {
          wall.shapeColor = color (255,0,0);
        }
        if(damage < 10)
          {
            wall.shapeColor = color (0,255,0);
          }
    }
  drawSprites();
}

function hasCollided(object1,object2)
{
  object1RightEgde = object1.x + object1.width;
  object2LeftEgde = object2.x;

}










// BELOW IS THE PROJECT DONE AFTER CLASS 20 => PROJECT 20
/*
var car,wall;
var speed,weight;


function setup() {
  
createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

car = createSprite(50,200,50,50);
car.velocityX = speed;

wall = createSprite(1500,200,60,height/2);
wall.shapeColor = color(80,80,80);



}


function preload() {

}

function draw() {
  background("black")

  if(wall.x - car.x < car.width/2 + wall.width/2)
    {
        car.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed/22509;
        
        if(deformation > 180)
        {
          car.shapeColor = color (255,0,0);
        }

        if(deformation < 180 && deformation >100)
          {
            car.shapeColor = color (230,230,0);
          }
        if(deformation < 100)
          {
            car.shapeColor = color (0,255,0);
          }
    }


  drawSprites();
}
*/


// BELOW IS THE WORK DONE IN CLASS 20
/*
var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;

}

function draw() {
  background("black"); 

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 )
 {
    movingRect.velocityX = movingRect.velocityX*(-1)
    fixedRect.velocityX = movingRect.velocityX*(-1)
 }
 if(fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2)
{
  movingRect.velocityY = movingRect.velocityY*(-1)
  fixedRect.velocityY = movingRect.velocityY*(-1)
}

  drawSprites();
}
*/