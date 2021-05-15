var backImg,ch1 , ground,engine,world,boyImg,boy;
var snowParticle=[];
function preload(){
backImg=loadImage("snow2.jpg");
boyImg=loadImage("image_boy.png")
}

function setup() {
  createCanvas(1200,600);
  engine=Matter.Engine.create();
  world=engine.world;

  boy = createSprite(200, 500, 50, 50);
  boy.addImage(boyImg);
  boy.scale=0.40;
  
  
  ground=createSprite(600,width/2,width,10);
  
  ground.visible=false;
}

function draw() {
  Matter.Engine.update(engine);
  background(backImg);
  if(frameCount%10===0){
    snowParticle.push(new Snow(random(0,1200),10,50))
  }  
  for(var i =0 ; i<snowParticle.length;i++){
    snowParticle[i].display();
  }

  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-5;

  }
  else if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+5
  }

  if(keyDown("SPACE")&& (boy.y>=400)){
    boy.velocityY=-8
  }
  boy.velocityY=boy.velocityY+0.8
  boy.collide(ground)
  drawSprites();
  
}