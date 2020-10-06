var car,wall,speed,weight;

function setup() {
  createCanvas(600,600);

  speed = random(55,90);
  weight= random(400,1500);
}

function draw() {
  background("blue");  
  
  car = createSprite(50,100,30,30);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(550,100,15,180);
  
  if (wall.x -car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformationn = 0.5 * weight * speed * speed/22509;

    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    if(deformation < 100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}