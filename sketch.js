const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var green1, rect1,rect2,rect3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Bodies for trash can
	green1 = new Trash(700,600,120,10);
	
	//creating ground
	ground = new Ground(400,690,width,10);

	//creating the rectangles
	rect1 = new Ground(640,610,20,170);
	rect2 = new Ground(700,680,120,10);
	rect3 = new Ground(760,610,20,170);

	//creating the ball
	paper = new Paper(50,688,35);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(109,255,0);
  
  rect1.display();
  rect2.display();
  rect3.display();

  ground.display();
  green1.display();
  paper.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-100})
	}
}

