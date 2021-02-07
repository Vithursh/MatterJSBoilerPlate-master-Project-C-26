
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint

var Boy1, slingShot;
var Tree1;
var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6, Mango7, Mango8;
var Stone1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Boy1 = new Boy(200,600,100,100);
	Tree1 = new Tree(550,400,10,10);
	Mango1 = new Mango(550,300,10,10);
	Mango2 = new Mango(650,300,10,10);
	Mango3 = new Mango(750,300,10,10);
	Mango4 = new Mango(450,300,10,10);
	Mango5 = new Mango(350,300,10,10);
	Mango6 = new Mango(450,230,10,10);
	Mango7 = new Mango(550,230,10,10);
	Mango8 = new Mango(650,230,10,10);
	Stone1 = new Stone(200,600,10,10);
	slingShot = new Chain(Stone1.body,{x: 200, y: 100});
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
  drawSprites();
 Boy1.display();
 Tree1.display();
 Mango1.display();
 Mango2.display();
 Mango3.display();
 Mango4.display();
 Mango5.display();
 Mango6.display();
 Mango7.display();
 Mango8.display();
 Stone1.display();
 slingShot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(Stone1.body,{x: mouseX, y: mouseY})

}


function mouseReleased(){
    slingShot.fly();
}


function detectCollision(Stone,Mango){

	MangoBodyPosition=Mango.body-position
	StoneBodyPosition=Stone.body-position

	var distance=dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
	if(distance<-Mango.r+Stone.r)
	{
		Matter.Body.setStatic(Mango.body,false);
	}

		Mango1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );


	detectCollision(Stone1,Mango1);
	detectCollision(Stone1,Mango2);
	detectCollision(Stone1,Mango3);
	detectCollision(Stone1,Mango4);
	detectCollision(Stone1,Mango5);
	detectCollision(Stone1,Mango6);
	detectCollision(Stone1,Mango7);
	detectCollision(Stone1,Mango8);
}



