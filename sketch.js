var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  
  ball1 = createSprite(200,100,50,50);
  ball2 = createSprite(600,100,50,50);
  ball1.velocityX =  2;
  ball2.velocityX = -2;
  ball1.shapeColor = "purple";

  ball3 = createSprite(300,100,50,50);
  ball4 = createSprite(300,500,50,50);
  ball3.velocityY =  2;
  ball4.velocityY = -2;
  ball3.shapeColor = rgb(181,101,29);
}

function draw() {
  background(0,0,0); 

  if(isTouching(ball1,ball2)){
    ball1.shapeColor = "red";
    ball2.shapeColor = "red";
  }
  
  bounceOff(ball1,ball2);
  bounceOff(ball3,ball4);

  drawSprites();
}

// This function accepts 2 arguments
// This function returns a boolean 
