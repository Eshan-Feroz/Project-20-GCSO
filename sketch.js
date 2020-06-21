// Project 20 - GCSO
// Description: Measure the deformation of the cars during crash test

// Global variables
var car, wall;
var speed, weight;

function setup() {
  // Canvas size
  createCanvas(1600,400);

  // Random speed and weight of car
  speed = random(55, 90);
  weight = random(400, 1500);

  // Create car sprite with color white
  car = createSprite(50, 200, 100, 50);
  car.shapeColor = "white";
  
  // Create wall sprite with color white
  wall = createSprite(1350, 200, 60, 200);
  wall.shapeColor = "white";
}

function draw() {
  // Make the background color black
  background(0, 0, 0);  

  // The speed is equal to the x-velocity of the car
  car.velocityX = speed;

  // If the car is touching the wall (in algorithm)
  if(wall.x - car.x < (wall.width + car.width)/2){

    //Stop the car
    car.velocityX = 0;
    // Create deformation variable and calculate value using formula
    var deformation = 0.5 * weight * speed * speed/ 22509;

    // Color code the car red when the deformation is more than 180
    if(deformation > 180){
        car.shapeColor = color(255, 0, 0);
    }

    // Color code the car yellow when the deformation is less than 180 but more than 100
    if(deformation < 180 && deformation > 100){
        car.shapeColor = color(230, 230, 0);
    }

    // Color code the car green when the deformation is less than 100
    if(deformation < 100){
        car.shapeColor = color(0, 255, 0);
    }
  }

  // Draw the sprites
  drawSprites();
}