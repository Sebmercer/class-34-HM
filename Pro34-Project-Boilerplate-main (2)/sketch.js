const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10;

var block1, block2, block3;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(0,400,20,1200,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(550,400,20,1200,plane_options);
    World.add(world,block2);
    block3=Bodies.rectangle(0,0,1200,20,plane_options);
    World.add(world,block3);
    
    var particle_options = {
      restitution:0.7,
      friction:-1
    }

    particle1 = Bodies.circle(200,60,10,particle_options);
    World.add(world,particle1);
    particle2 = Bodies.circle(200,50,10,particle_options);
    World.add(world,particle2);
    particle3 = Bodies.circle(200,40,10,particle_options);
    World.add(world,particle3);
    particle4 = Bodies.circle(200,30,10,particle_options);
    World.add(world,particle4);
    particle5 =Bodies.circle(200,20,10,particle_options);
    World.add(world,particle5);

    
   

     
   
    fill("blue");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,20,1200);
  rect(block2.position.x,block2.position.y,20,1200);
  rect(block3.position.x,block3.position.y,1200,20);
  
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);

  
 
}
