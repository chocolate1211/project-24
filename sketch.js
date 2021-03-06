
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
//var rubber;
var stone;
var ground
//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    hammer=new Hammer(100,300);
	stone=new Stone(100,490,80,80);
	ground=new Plane(400,height,800,20);
  //rubber=new Rubber(150,200,40);
	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  hammer.display();
  stone.display();
  ground.display();
  //rubber.display();
  //drawSprites();
 
}



