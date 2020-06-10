const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  roof1 = new Roof(360,40); 
  bobObject1 = new Bob(250, 250);
  bobObject2 = new Bob(300, 250);
  bobObject3 = new Bob(350, 250);
  bobObject4 = new Bob(400, 250);
  bobObject5 = new Bob(450, 250);
  joint1 = new Chain(bobObject1.body, {x:250, y:40});
  joint2 = new Chain(bobObject2.body, {x:300, y:40});
  joint3 = new Chain(bobObject3.body, {x:350, y:40});
  joint4 = new Chain(bobObject4.body, {x:400, y:40});
  joint5 = new Chain(bobObject5.body, {x:450, y:40});
  
  //roller = new Lines(250, 145);
  //sweet = new Attract(bobObject1.body, bobObject2.body);

}

function draw(){
  background(225);
  Engine.update(engine);
  roof1.display();
  //console.log(bobObject1.mass)
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  joint1.display();
  joint2.display();
  joint3.display();
  joint4.display();
  joint5.display();
  //roller.display();
 
  if(keyDown("enter")){
    console.log("in enter")
    //bobObject1.body.setStatic(bobObject1Body, false);
    // Matter.Body.setStatic(bobObject1.body, false)
    // bobObject1.body.position.x = 100;
    // bobObject1.body.position.y = 200;
    //Matter.Body.applyForce(bobObject2.body, {x:},{x:305, y:250})
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position ,{x:-50, y:-45})
    //bobObject1.bounceOff(bobObject2);
  }
}

function keyPressed(){
  console.log("in space")
  if(keyCode===32){
    console.log("in space in")
      bobObject1.body.position.x = 100;
     bobObject1.body.position.y = 200;

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position ,{x:-50, y:-45})
     Matter.Body.setStatic(bobObject1.body, false)
  }
}










