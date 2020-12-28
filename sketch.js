const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);


    box1 = new Box(400,320,50,50);
    box2 = new Box(400,280,50,50);

    box3 = new Box(400,220,50,50);
    box4 = new Box(400,180,50,50);
    

    ball1=new Ball(500,200,30,30);

    box5 = new Box(400,120,50,50);

    
    



    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball1.body,{x:500, y:50});
}

function draw(){
    background("pink");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    ball1.display();

    box5.display();
    

    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


//function keyPressed(){
//    if(keyCode===32){
  //      slingshot.attach(bird.body);
  //  }
//}