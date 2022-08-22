
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16;
var ground;
var player;
var spaceshipImage;
var bricksArray = [];
var bombsArray = [];
var explosion;

function preload() {
  explosion = loadImage('explosion.png');
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //bottom row
  
  brick1 = new Brick(180,350,20,50);
  brick2 = new Brick(220,350,20,50);
  brick4 = new Brick(260,350,20,50);
  brick6 = new Brick(140,350,20,50);

  brick3 = new Brick(200,320,40,20);
  brick5 = new Brick(240,320,40,20);
  brick7 = new Brick(160,320,40,20);

  //second row

  brick8 = new Brick(160,280,20,50);
  brick9 = new Brick(200,280,20,50);
  brick10 = new Brick(240,280,20,50);

  brick11 = new Brick(180,250,40,20);
  brick12 = new Brick(220,250,40,20);

  //third row

  brick13 = new Brick(180,240,20,50);
  brick14 = new Brick(220,240,20,50);

  brick15 = new Brick(200,210,40,20);
  brick16 = new Brick(200,200,20,40);

  bricksArray = [brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16];


  let options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);


  player = new Player();

  rectMode(CENTER);


}


function draw() 
{
  background(30);


  brick1.show();
  brick2.show();
  brick3.show();
  brick4.show();
  brick5.show();
  brick6.show();
  brick7.show();
  brick8.show();
  brick9.show();
  brick10.show();
  brick11.show();
  brick12.show();
  brick13.show();
  brick14.show();
  brick15.show();
  brick16.show();


  fill(100);
  rect(ground.position.x,ground.position.y,200,20);

  showBombs();
  player.show();
  player.handleControls();

 
  handleCollisions();

  Engine.update(engine);
  


}

function keyReleased() {
  if(keyCode === 32) {
    dropBomb();
  }
  if(keyCode === UP_ARROW) {
    console.log(bombsArray);
  }
}

function dropBomb() {
  console.log('called Player.dropBomb()');

  var bomb = new Bomb();
  bombsArray.push(bomb);
}

function showBombs() {
  if(bombsArray.length>0) {
    for(var i = 0; i<bombsArray.length; i++) {
      bombsArray[i].show();
    }
  }
}

function handleCollisions() {
  if(bombsArray.length>0) {

    for(var i = 0; i < bombsArray.length; i++) {
      for(var j = 0; j < bricksArray.length; j++) {

       

        if(collide(bombsArray[i],bricksArray[j])) {
          bombsArray[i].body.position.x = 600;
          bricksArray[j].body.position.x = 600;
        }

      }
    }

  }
}

function collide(bomb,brick){
  var bombPos = bomb.body.position;


  var d = dist(bombPos.x,bombPos.y,brick.x,brick.y);
    if(d<=40 )
    {
      console.log('collided');
      imageMode(CENTER);
      image(explosion,bombPos.x,bombPos.y,80,80);
        return true; 

    }
    else{
      return false;
    }
}
