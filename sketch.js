 const Engine= Matter.Engine;
 const Bodies= Matter.Bodies;
 const World= Matter.World;
 var ball, ground, obstacle;
 var engine,world;
 var canvas;
 var npc;
 var previous=0,current;
 var canvas;
  function preload(){
    birdimg= loadImage("bird.png")
  }
 

 function setup(){
   // fill(rgb(0,0,0))
   canvas=createCanvas(1600,600)
    
    engine= Engine.create()
    world= engine.world;
    ground= new Ground(1,596,3200,20)
   // ground= createSprite(300,596,3200,20)
    //ground.debug=true;
    //ground.setCollider("rectangle",0,0,3200,20)
 
    ball= new Ball(200,594,31,20)
    npc= new Nonplayer(1000,594,40,60)

    //previous = millis()
   
 }

 function draw(){
   background(0)
    Engine.update(engine)
    ground.display();
    ball.display()
    npc.display()
    //npc.moving()
    current = millis();
    console.log(npc.body.speed)
    //isCollided()
    //console.log("current: ", Math.floor(current/1000))
   // console.log("previous: ", Math.floor(previous/1000))

    //console.log(beforesecondspace)
    //ball.collide(ground)
    //isColliding()
  //  keyPressed()
  drawSprites()
 }
 function keyPressed(){
    if(keyCode===32 && ball.body.position.y>520 && (current - previous)/1000 >=0.5){ //Space
      ball.upForce()
      ball.downForce()
      previous = current;
      //console.log("previous = current")
    }
    else{console.log("pressed multiple times")}
    if(keyCode === LEFT_ARROW){
      ball.leftForce()
    }
    if(keyCode === RIGHT_ARROW){
      ball.rightForce()
    }


   
  }
 //function isColliding(){
  //  if(ball.x-ground.x<ball.width/2){
    //   console.log("touching")
   // }
 //}
//function isCollided(){
//  if(npc.body.speed>4){
 //   console.log("Working")

 /// }
//}


