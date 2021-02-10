const Engine = Matter.Engine
const World = Matter.World  
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var myWorld,myEngine;
var ground,plate,plate2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25; 
var polygon,slingshot;
var score,backgroundImg;
function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(800, 600);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(400, 590, 800, 10);
  plate = new Ground(300, 560, 300, 10);
  plate2 = new Ground(600, 400, 250, 10);

  box1 = new Box(210, 530, 30, 40);
  box2 = new Box(240, 530, 30, 40);
  box3 = new Box(270, 530, 30, 40);
  box4 = new Box(300, 530, 30, 40);
  box5 = new Box(330, 530, 30, 40);
  box6 = new Box(360, 530, 30, 40);
  box7 = new Box(390, 530, 30, 40);

  box8 = new Box(240, 490, 30, 40);
  box9 = new Box(270, 490, 30, 40);
  box10 = new Box(300, 490, 30, 40);
  box11 = new Box(330, 490, 30, 40);
  box12 = new Box(360, 490, 30, 40);

  box13 = new Box(270, 450, 30, 40);
  box14 = new Box(300, 450, 30, 40);
  box15 = new Box(330, 450, 30, 40);

  box16 = new Box(300, 410, 30, 40);
  
  box17 = new Box(540,200,30,40);
  box18 = new Box(570,200,30,40);
  box19 = new Box(600,200,30,40);
  box20 = new Box(630,200,30,40);
  box21 = new Box(660,200,30,40);

  box22 = new Box(570,160,30,40);
  box23 = new Box(600,160,30,40);
  box24 = new Box(630,160,30,40);

  box25 = new Box(600,120,30,40);
  console.log(box25.body.speed)

  polygon = new Paper(50,450);
  var render = Render.create({ element:document.body, engine:myEngine, options:{ width:800, height:600, wireframes:false } })
  Render.run(render);

  slingshot = new Slingshot(polygon.body,{x:50, y:425});
  score = 0;
  Engine.run(myEngine);
}
function draw() {
  if(backgroundImg){
  background(backgroundImg);
}   
  Engine.update(myEngine);
  
  ground.display();
  plate.display();
  plate2.display();
  fill("blue");
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  fill("purple");
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  fill("red");
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  fill("green");
  box16.display();
  box16.score();
  fill("blue");
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  fill("purple");
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  fill("red");
  box25.display();
  box25.score();
  text(mouseX + ","+mouseY,mouseX,mouseY);
  polygon.display();
  text("the score:"+score,400,200);
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}