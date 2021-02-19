
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprite, ground, box1, box2, box3, ballSprite, ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(width/2, height-50, width, 10, {isStatic:true});
 	World.add(world, ground);
	fill("green")

	box1 = new Box(650,530,10,50);
	World.add(world, box1);

	box2 = new Box(700,550,100,10);
	World.add(world, box2);

	box3 = new Box(750,530,10,50);
	World.add(world, box3);

	ballSprite=createSprite(100, 550, 20, 20);
	ballSprite.shapeColor=color("purple")
	ballSprite.visible = false

	ball = Bodies.circle(100, 550, 20, {isStatic:true, restitution:0.3, density:1.2, friction:0.5});
 	World.add(world, ball);
	fill("purple")
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ballSprite.x = ball.position.x
  ballSprite.y = ball.position.y
  circle(ballSprite.position.x, ballSprite.position.y, ballSprite.radius);
  circle(ball.position.x, ball.position.y, 20);
  groundSprite.display();
  box1.display();
  box2.display();
  box3.display();
  ballSprite.display();
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		ball = Bodies.circle(100, 550, 20, {isStatic:false, restitution:0.3, density:1.2, friction:0.5});
		fill("red")
		Matter.Body.applyForce(ball, ball.position, {x: 85, y:-85});
	    World.add(world, ball);
	 }
   }
   



