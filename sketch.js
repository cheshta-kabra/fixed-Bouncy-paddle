                                                                                                                                      var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=12;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background("yellow");
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=4;
  }
  if(ball.x>400){
     paddle.x=360;
     paddle.y=150;
    
     }
  explosion();
  drawSprites();
  
}


function explosion(){
  
  //console.log(ball.y);
  //console.log(paddle.y);
  if(ball.isTouching(paddle)){
    ball.velocityX=Math.round(random(4,9));
    ball.velocityY=Math.round(random(10,13));
   // console.log(ball.velocityY);
    //console.log(ball.velocityX);
    ball.bounceOff(paddle);
  }
}

