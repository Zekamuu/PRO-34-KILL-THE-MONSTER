const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgimage;
var monster, monster1Img, monster2Img;
var superhero, superhero1Img, superhero2Img;
var ground;
var launcher;

function preload() {

  bgimage = loadImage("images/GamingBackground.png");
  monster1Img = loadImage("images/Monster-01.png");
 monster2Img = loadImage("images/Monster-02.png");
  superhero1Img = loadImage("images/Superhero-01.png");
  superhero2Img = loadImage("images/Superhero-02.png");
}

function setup() {
  createCanvas(3000, 800);
  matterEngine = Engine.create();
  matterWorld = matterEngine.world;

  ground = new Barriers(width/2-1500, height-50, width-100, 20)
  superhero = new Heroes(400, 700, 50);
  monster = new Monsters(600, 300, 200);
  launcher = new slingShot(superhero.body, {x:400, y:500})
  Engine.run(matterEngine);
}

function draw() {
  background(bgimage);
  ground.show();
  superhero.show(); 
  monster.show();
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}