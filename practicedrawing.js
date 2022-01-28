/*function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  }*/
  
  let detailY;
  // slide to see how detailY works
  function setup() {
    createCanvas(windowWidth-30, windowHeight-30, WEBGL);
    detailY = createSlider(3, 16, 3);
    detailY.position(10, height + 5);
    detailY.style('width', '80px');
  }
  
  function draw() {
    background(205, 105, 94);
    rotateY(millis() / 1000);
    sphere(40, 16, detailY.value());
  }