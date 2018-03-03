
var isdone1;
var isdone2;
var isdone3;
var isgreen = 0;

//function that toggles the title visible/invisible
function doneFunction() {
  var isdone_total = isdone1 + isdone2 + isdone3;
  var green_button = document.getElementById("button-black");

  console.log(isgreen);

  if(isgreen == 1)
  {  green_button.onclick = function(){
      //console.log("clicked when the button changed to green");
      isgreen += 1;
      console.log(isgreen);
      document.getElementById("button-black").innerHTML = ">>>";
    }
  }


  if(isdone_total == 0)
  {
    console.log("you are done");

    //now move on to the next panel
    document.getElementById("button-black").innerHTML = "Correct!";
    document.getElementById("button-black").style.backgroundColor = "#00e640";
    isgreen = 1;

  }
  else {
    console.log("not done");
  }


}

function firstFunction(){
  var first_block = document.getElementById("first_block");
  isdone1 = 0;
  toggle = false;

  first_block.onclick = function(){
    toggle = !toggle;
    first_block.style.background = toggle? "#F7F70C": "#e9d460";
    isdone1 = 1;
  }

  first_block.style.background = "#e9d460";
}

function secondFunction(){
  var second_block = document.getElementById("second_block");
  isdone2 = 0;
  toggle2 = false;

  second_block.onclick = function(){
    toggle2 = !toggle2;
    second_block.style.background = toggle2? "#C552B2": "#aea8d3";
    isdone2 = 1;
  }

  second_block.style.background = "#aea8d3";

}

function thirdFunction(){
  var third_block = document.getElementById("third_block");
  isdone3 = 0;
  toggle3 = false;

  third_block.onclick = function(){
    toggle3 = !toggle3;
    third_block.style.background = toggle3? "#52F86E": "#87d37c";
    isdone3 = 0;
  }

  third_block.style.background = "#87d37c";

}







/*

//Chart.js tutorial
// Our labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: africa
      }
    ]
  }
});

*/





//Particle p;
/*
void setup() {
  size(640,360);
  p = new Particle(new PVector(width/2,10));
}

void draw() {
  background(255);
//Operating the single Particle
  p.run();
  if (p.isDead()) {
    println("Particle dead!");
  }
}

class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;
  float lifespan;

  Particle(PVector l) {
//For demonstration purposes we assign the Particle an initial velocity and constant acceleration.
    acceleration = new PVector(0,0.05);
    velocity = new PVector(random(-1,1),random(-2,0));
    location = l.get();
    lifespan = 255.0;
  }

//Sometimes it’s convenient to have a “run” function that calls all the other functions we need.
  void run() {
    update();
    display();
  }

  void update() {
    velocity.add(acceleration);
    location.add(velocity);
    lifespan -= 2.0;
  }

  void display() {
    stroke(0,lifespan);
    fill(0,lifespan);
    ellipse(location.x,location.y,8,8);
  }

//Is the Particle alive or dead?
  boolean isDead() {
    if (lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
*/
