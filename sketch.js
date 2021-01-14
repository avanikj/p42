const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var thunder,thunder1,thunder2,thunder3,thunder4;

var umbrella;
var drops = [];
var rand;

var thunderFrame = 0;

function preload(){
  thunder1 = loadImage("images/thunderbolt/1.png");
  thunder2 = loadImage("images/thunderbolt/2.png");
  thunder3 = loadImage("images/thunderbolt/3.png")
  thunder4 = loadImage("images/thunderbolt/4.png")
}

function setup(){
createCanvas(800,500)

engine = Engine.create();
world = engine.world;
    
umbrella = new Umbrella(200,350);

}

function draw(){
background("black")
Engine.update(engine);

if(frameCount % 50 == 0){
   for(var i = 0; i< 50; i++){
       drops.push(new Drops(random(10,700),random(0,50)))
   }
}
if(frameCount % 80 == 0){
   thunderFrame = frameCount
   thunder = createSprite(random(10,700),random(10,30),10,10)
   thunder.scale = random(0.3,0.6)
   rand = Math.round(1,4)
   switch(rand){
     case 1 : thunder.addImage(thunder1)
     break;

     case 2 : thunder.addImage(thunder2)
     break;

     case 3 : thunder.addImage(thunder3)
     break;

     case 4 : thunder.addImage(thunder4)
     break;

     default : break;
   }
}

if(thunder && thunderFrame + 10 == frameCount){
   thunder.destroy();
}
drawSprites();







umbrella.display();
for(var i = 0; i< drops.length; i++){
    drops[i].display();
    drops[i].update();
}
}