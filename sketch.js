var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisionHeight = 300;
var score = 0;
var mam, mam_img;
function preload() {
  mam_img = loadImage("mam.png");
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  // ground = new Ground(width / 2, height, width, 20);
  mam = new Plinko(400, 400, 20);
}

function draw() {
  background("black");
  textSize(20);
  Engine.update(engine);
  // ground.display();
  mam.display();

  if (frameCount % 1 === 0) {
    particles.push(new Particle(random(width / 8, width), 10, 10));
    score++;
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}
