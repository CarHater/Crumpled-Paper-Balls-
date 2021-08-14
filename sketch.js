const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	groundObj = new Ground(400,350,800,10);
	leftSide = new Ground(500,310,10,70);
	rightSide = new Ground(600,310,10,70);


	var ball_options={

		isStatic:false,
		restitution:0.3,
		friction:0,
		desnity:0.2,
		
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  drawSprites();

  ellipse(ball.position.x,ball.position.y,20);

  groundObj.show();
  leftSide.show();
  rightSide.show();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:-0.04});
		
	}


}



