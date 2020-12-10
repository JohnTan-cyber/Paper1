
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paperClass=createSprite(400,350,20,20)
	paperClass.shapeColor(255,0,255)

	groundClass=createSprite(800,680,200,300)

	bin1=new bin(780,660,20,50)
	bin2=new bin(780,640,50,20)
	bin3=new bin(780,620,20,50)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
   paperClass.display();
   groundClass.display();
   binClass.display();
  
}



