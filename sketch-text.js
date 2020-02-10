function setup() {
	createCanvas(windowWidth, 100);
  }
  
  function draw() {
    background(225);
    textSize(32);
    fill(75+(255-75)*second()/60);
    text(hour(), 10, 30);
    text(minute(), 10, 60);
    text(second(), 10, 90);
	}