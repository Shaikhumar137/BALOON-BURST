var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;
var greenGroup,redGroup,pinkGroup,blueGroup;
var arrowGroup;         
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
  blueGroup=new Group();
   redGroup=new Group();
   greenGroup=new Group();
   pinkGroup=new Group();
   arrowGroup=new Group();
}

function draw() {
  background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
if (keyDown ("space")){
  createarrow();
}
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    if(arrowGroup.isTouching(redGroup)){
      arrowGroup.destroyEach();
      redGroup.destroyEach();
      score=score+1;
    }
   if(arrowGroup.isTouching(blueGroup)){
      arrowGroup.destroyEach();
      blueGroup.destroyEach();
      score=score+2;
    }
   if(arrowGroup.isTouching(greenGroup)){
      arrowGroup.destroyEach();
      greenGroup.destroyEach();
      score=score+3;
    }
   if(arrowGroup.isTouching(pinkGroup)){
      arrowGroup.destroyEach();
      pinkGroup.destroyEach();
      score=score+4;
    }
  drawSprites();
  text("Score: "+ score, 300,50);
}


function redBalloon() {
  var red1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red1.addImage(red_balloonImage);
  red1.velocityX = 3;
  red1.lifetime = 150;
  red1.scale = 0.1;
  redGroup.add(red1);
}

function blueBalloon() {
  var blue1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue1.addImage(blue_balloonImage);
  blue1.velocityX = 3;
  blue1.lifetime = 150;
  blue1.scale = 0.1;
  
  blueGroup.add(blue1);
  
}

function greenBalloon() {
  var green1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green1.addImage(green_balloonImage);
  green1.velocityX = 3;
  green1.lifetime = 150;
  green1.scale = 0.1;
  greenGroup.add(green1);
}

function pinkBalloon() {
  var pink1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink1.addImage(pink_balloonImage);
  pink1.velocityX = 3;
  pink1.lifetime = 150;
  pink1.scale = 1
  pinkGroup.add(pink1);
}
function createarrow(){
  arrow=createSprite(bow.x,bow.y);
  arrow.addImage(arrowImage);
  arrow.velocityX=-4;
  arrow.scale= 0.5
  arrowGroup.add(arrow)
}