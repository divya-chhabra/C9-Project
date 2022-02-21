
function setup() 
{
  createCanvas(4000,4000);
  background(50);
  box = createSprite(700,500,30,30);
}
function draw() 
{
  if (keyIsDown(RIGHT_ARROW))  
  {
    background("red");
  
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
  
  }
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow"); 
   
  }
  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
   
  }
  drawSprites();
}

