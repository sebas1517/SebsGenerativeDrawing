let yoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight-20);
  
  line1 = new Lines(windowHeight-20);
  line2 = new Lines(windowHeight/2);
  line3 = new Lines(windowHeight/3);
  line4 = new Lines(windowHeight/4);
  line5 = new Lines(windowHeight/5);
  line6 = new Lines(windowHeight/6);
  line7 = new Lines(windowHeight/7);
  line8 = new Lines(windowHeight/8);

  
  slider = createSlider(0.0, 2,0, 0.0, 0.05);
}

function draw() {
  background(255);

  line1.change();
  line2.change();
  line3.change();
  line4.change();
  line5.change();
  line7.change();
  line8.change();

}

class Lines {
  constructor(y) {
    this.y = y;
  }

  change() {
    beginShape();
    stroke(50);
    strokeWeight(4);
    noFill();
    let xoff = 0;
    for (let x = 0; x <= windowWidth; x += 1) {
      let y = this.y - noise(xoff, yoff) * 120 * slider.value();
      vertex(x,y);
      xoff += 0.01;
    }
    yoff += 0.01;
    vertex(windowWidth, windowHeight);
    vertex(0, windowHeight);
    endShape(CLOSE);
  }
}