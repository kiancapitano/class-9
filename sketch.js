var sprite;

function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,35,35);
}

function draw() 
{
  background("purple");

  if(keyDown("Up_Arrow")){
    sprite.position.y = sprite.position.y -5;
  }

  if(keyDown("Down_Arrow")){
    sprite.position.y = sprite.position.y +5;
  }

  if(keyDown("Left_Arrow")){
    sprite.position.x = sprite.position.x -5;
  }

  if(keyDown("Right_Arrow")){
    sprite.position.x = sprite.position.x +5;
  }
drawSprites();
}




