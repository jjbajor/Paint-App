
var currentcolor;
var thickness;

function setup() {
  createCanvas(800, 600);
  background(225);
  currentColor = color(0);
  thickness = 20;
}

function draw() {
  let red = color(255, 0, 0);
  let orange = color(255, 150, 0);
  let yellow = color(255, 255, 0);
  let green = color(0, 255, 0);
  let cyan = color(0, 180, 255);
  let blue = color(0, 0, 255);
  let magenta = color(200, 0, 255);
  let brown = color(150, 80, 50);
  let white = color(255, 255, 255);
  let black = color(0, 0, 0);
  
  
  if(mouseIsPressed) {
    if(mouseX <= 40) {
      if(mouseY <= 40) {
        currentColor = red;
        print("red");
      } else if(mouseY <= 80) {
        currentColor = orange;
        print("orange");
      } else if(mouseY <= 120) {
        currentColor = yellow;
        print("yellow");
      } else if(mouseY <= 160) {
        currentColor = green;
        print("green");
      } else if(mouseY <= 200) {
        currentColor = cyan;
        print("cyan");
      } else if(mouseY <= 240) {
        currentColor = blue;
        print("blue");
      } else if(mouseY <= 280) {
        currentColor = magenta;
        print("magenta");
      } else if(mouseY <= 320) {
        currentColor = brown;
        print("brown");
      } else if(mouseY <= 360) {
        currentColor = white;
        print("white");
      } else if(mouseY <= 400) {
        currentColor = black;
        print("black");
      } else if(mouseY >= 440 && mouseY <= 480) {
        thickness = 10;
        print("thickness: 10");
      } else if(mouseY >= 480 && mouseY <= 520) {
        thickness = 20;
        print("thickness: 20");
      } else if(mouseY >= 520 && mouseY <= 560) {
        thickness = 30;
        print("thickness: 30");
      }
    } else if(mouseX > 760) {
      if(mouseY < 40) {
        background(225);
        print("canvas cleared");
      }
    }
  }
  
  if(mouseIsPressed) {
    noStroke();
    fill(currentColor);
    circle(mouseX, mouseY, thickness);
  }
  
  function createSelectionAreas() {
    fill(red);
    stroke(white);
    square(0, 0, 40);
  
    fill(orange);
    stroke(white);
    square(0, 40, 40);
  
    fill(yellow);
    stroke(white);
    square(0, 80, 40);
  
    fill(green);
    stroke(white);
    square(0, 120, 40);
  
    fill(cyan);
    stroke(white);
    square(0, 160, 40);
  
    fill(blue);
    stroke(white);
    square(0, 200, 40);
  
    fill(magenta);
    stroke(white);
    square(0, 240, 40);
  
    fill(brown);
    stroke(white);
    square(0, 280, 40);
  
    fill(white);
    stroke(white);
    square(0, 320, 40);
  
    fill(black);
    stroke(white);
    square(0, 360, 40);
    
    fill(white);
    stroke(black);
    rect(0, 440, 40);
    fill(currentColor);
    stroke(black);
    circle(20,460, 10)
    
    fill(white);
    stroke(black);
    rect(0, 480, 40)
    fill(currentColor);
    stroke(black);
    circle(20,500, 20)
    
    fill(white);
    stroke(black);
    rect(0, 520, 40)
    fill(currentColor);
    stroke(black);
    circle(20,540, 30)
    
    fill(white);
    rect(760, 0, 40)
    fill(black);
    noStroke();
    text('Clear', 765, 25)
  }
  
  createSelectionAreas();
  
}
