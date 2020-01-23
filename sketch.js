function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	if (second() == 0){
        print(minute());
    }
    background(60);
	noFill();
	colorMode(RGB,60);
	strokeWeight(3);
	stroke(60-second());
	arc(width/2, height/2, 100, 100, -PI/2, -PI/2+2*PI*second()/60);
    arc(width/2, height/2, 200, 200, -PI/2, -PI/2+2*PI*minute()/60);
    arc(width/2, height/2, 300, 300, -PI/2, -PI/2+2*PI*hour()/24);
}
