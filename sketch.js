const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var ground;
var ball;
function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;


  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);


  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
 var ball_options={
   restitution:1
 }
ball=Bodies.circle(200,200,20,ball_options);
World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(engine);



  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);

   ellipseMode(RADIUS)
   fill("blue")
   ellipse(ball.position.x,ball.position.y,20,20);

 
}