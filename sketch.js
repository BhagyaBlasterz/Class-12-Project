var runner, running;
var ground, invisibleGround1, invisibleGround2, groundImage;
invisibleGround;

function preload() {
  running = loadAnimation("Runner-1.png", "Runner-2.png");

  groundImage = loadImage("path.png")
}

function setup() {
  createCanvas(400,610);

  //create a ground sprite
  ground = createSprite(202,305);
  ground.addImage("ground",groundImage);
  //ground.x = ground.width /2;
  ground.velocityY = 3;
  ground.scale=1.32
  

  //create a runner sprite
  runner = createSprite(208,550,20,50);
  runner.addAnimation("running", running);
  runner.scale = 0.06;
  
  //creating a invisible ground
    //invisibleGround1 = createSprite(8,175,15,350);
    //invisibleGround1.visible=false

    //invisibleGround2 = createSprite(299,175,15,350);
    //invisibleGround2.visible=false

}

function draw() {
  background(220);

  if (runner.x===208 && keyDown("left")) {
    runner.x=80
  }

  if (runner.x===330 && keyWentUp("left")) {
    runner.x=208
  }

  if (runner.x===80 && keyWentUp("right")) {
    runner.x=208
  }

  if (runner.x===208 && keyDown("right")) {
    runner.x=330
  }


  if (ground.y > 300) {
    ground.y = ground.width / 2;
  }

  ground.velocityY=3 
  
  ///runner.collide(invisibleGround1)
  //runner.collide(invisibleGround2)

  drawSprites();
}