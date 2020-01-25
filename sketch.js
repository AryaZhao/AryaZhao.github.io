function setup() {
	createCanvas(800,600,WEBGL);
  }
  
  function draw() {
	  if (second() == 0){
			print(minute());
	  }
	  background(225);
	  noFill();
	  strokeWeight(5);
	  stroke(50+255*second()/60);
	  rotateY(millis() / 1000);
	  arc(0, 0,150, 150, -HALF_PI,  -HALF_PI+TWO_PI*second()/60);
	  rotateY(2*millis() / 1000);
	  arc(0, 0, 300, 300, -HALF_PI, -HALF_PI+TWO_PI*minute()/60);
	  rotateY(3*millis() / 1000);
	  arc(0, 0, 450, 450, -HALF_PI, -HALF_PI+TWO_PI*hour()/24);
	}