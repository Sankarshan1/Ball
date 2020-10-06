var ball,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;




	var ball_option={
	restitution:1.0
	}

	ball=Bodies.circle(100,640,20,20,ball_option)
	world.add(world,ball)
	ground=createSprite(450,660,800,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.collide(ground)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){


}



