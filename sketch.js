
const canvasSize = {x:800, y:800}
var homeUIActive = true;
var ConnorGame = false;
var Game2 = false;
var Game3 = false;
var Game4 = false;

let FROGPICTURE;
function preload()
{
  FROGPICTURE = loadImage('FSE100/frogIMG.png');
  FROGPICTURE.resize(200,200);
}

function setup() {
  createCanvas(canvasSize["x"], canvasSize["y"]);
  
}
function aButton(newText, posX,posY, widthX, widthY, boxColor, textColor, daTextSize, daStrokeWeight)
{
  //= color(0,0,0)
    // Box Around
    strokeWeight(daStrokeWeight)
    fill(boxColor);
    rect(posX, posY, widthX, widthY);
    // Text
    fill(textColor);
    textAlign(CENTER,CENTER) 
    textSize(daTextSize);
    text(newText,posX, posY,widthX,widthY);
    
    if (mouseIsPressed === true 
      && (winMouseX > posX)
      && (winMouseX < posX + widthX)
      && (winMouseY > posY)
      && (winMouseY < posY + widthY))
    {
      return true;
        
    }
    return false;
}

function draw() {
  
  strokeWeight(5);
  fill(color(256,256,256))
  rect(0,0,800,800);

  if (homeUIActive)
  HomeUIDraw();


  if (ConnorGame)
  {
    menuBarUIDraw(1);

    fill(color(0));
    strokeWeight(0);
    textAlign(CENTER,CENTER);

    ConnorDraw();
  }

  if (Game2)
  {
    menuBarUIDraw(2)

    fill(color(0))
    strokeWeight(0)
    textAlign(CENTER,CENTER)
    text("GAME NOT HERE",0,0,800,800);
  }
  if (Game3)
  {
    menuBarUIDraw(3)

    fill(color(0))
    strokeWeight(0)
    textAlign(CENTER,CENTER)
    text("GAME NOT HERE",0,0,800,800);
    }
  

  if (Game4)
  {
    menuBarUIDraw(4)

    fill(color(0))
    strokeWeight(0)
    textAlign(CENTER,CENTER)
    text("GAME NOT HERE",0,0,800,800);
  }
  


}


myCircleY = 120;
myCircleX = 120;
myTringle = 93;
myTringle2 = 12
myReverseY = false;
myReverseX = false;
myTringleReverse = false;
myTringleReverse2 = false;
radius = 50;


function thatProject()
{
  background(220);
  let x = color(23,33,139);
  let f = stroke(255, 204, 0);
  fill(x);
  circle(myCircleX ,myCircleY, radius*2);
  
  x = color(65);
  f = stroke(23,33,139);
  fill(x);
  triangle(myCircleY*myTringle/canvasSize["x"], (myCircleX+1)*(1+myTringleReverse2)*100/canvasSize["y"], myTringle, myCircleX+10, myTringle2, myTringle2/myCircleY*myCircleX);
  
  let c = color(255, 204, 0);
  f = stroke(65);
  fill(c);
  rect(81, 81, 63, 63);
  
  
  // FUCK
  c = color(255, 204, 0);
  fill(c);
  noStroke();
  
  //circle(myCircleY - 40, myCircleX - 40, radius*2);
// A grayscale value.
  
  //circle(75, 75, 80);
  
  // ??
  if (!myReverseY)
    myCircleY = myCircleY + 4;
  else if (myReverseY)
    myCircleY = myCircleY - 4;
  
  if (!myReverseX)
    myCircleX = myCircleX + 4;
  else if (myReverseX)
    myCircleX = myCircleX - 4;


  if (!myTringleReverse)
    myTringle = myTringle + 2;
  else if (myTringleReverse)
    myTringle = myTringle - 7;
 
    if (!myTringleReverse2)
    myTringle2 = myTringle2 + 5;
  else if (myTringleReverse2)
    myTringle2 = myTringle2 - 2;
 
  
  
  if(myTringle >= canvasSize["y"])
    myTringleReverse = true;

  else if (myTringle <= 0)
    myTringleReverse = false;
  
  if(myTringle2 >= canvasSize["x"])
    myTringleReverse2 = true;

  else if (myTringle2 <= 0)
    myTringleReverse2 = false;
  
  //myCircleX = myCircleX + 9;
  if (myCircleX + radius >= canvasSize["x"])
    {
      //myCircleX = radius;
      myReverseX = true;
    }
  if (myCircleY + radius >= canvasSize["y"])
    {
      //myCircleY = radius;
      myReverseY = true;
    }
  
  if (myCircleX - radius <= 0)
    {
      //myCircleX = radius;
      myReverseX = false;
    }
  if (myCircleY - radius <= 0)
    {
      //myCircleY = radius;
      myReverseY = false;
    }
}