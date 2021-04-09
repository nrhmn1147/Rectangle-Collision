var fixrect, movrect;

function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(200, 200, 50, 80);
  movrect = createSprite(400, 200, 80, 30);
  fixrect.shapeColor = "blue";
  movrect.shapeColor = "blue";

}

function draw() {
  background(0);
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;

  console.log(movrect.x-fixrect.x);

  if((movrect.x-fixrect.x) < (fixrect.width/2 + movrect.width/2) &&
    (fixrect.x - movrect.x) < (fixrect.width/2 + movrect.width/2) && 
    (movrect.y-fixrect.y) < (fixrect.height/2 + movrect.height/2) &&
    (fixrect.y - movrect.y) < (fixrect.height/2 + movrect.height/2)) {
    fixrect.shapeColor = "magenta";
    movrect.shapeColor = "magenta"; 
    
  } else {
    fixrect.shapeColor = "blue";
    movrect.shapeColor = "blue";   
  }

  

  drawSprites();
}