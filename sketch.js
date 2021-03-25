const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1550, 640);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(240,450,70);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1059,400,28,300);

	Engine.run(engine);

	 
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  groundObject.display();
  dustbin1.display();
  paperObject.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}