const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var rubber1;
var hammer;

var bg = "bg.jpg";
function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

ground = new Ground(600,400,1200,20);
hammer = new Hammer(610,360,300, PI/2);
stone1 = new Stone(320,340,70,70);
stone2 = new Stone(810,260,70,70);
rubber = new Rubber(100,100,10);

     

}

function draw(){
background("yellow");

Engine.update(engine);

ground.display();
rubber.display();
hammer.display();
stone1.display();
stone2.display();  
}





