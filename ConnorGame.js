var gameStarted = false;
const mazeUnit = 100;
const mazeBorder = {leftX:50, topY:125, rightX: 750, bottomY: 675};

const startButtonSizes = 
{posX:350, posY:25, widthX: 100, widthY: 50}
//const startButtonText = 
//{posX:375, posY:25}
function ConnorDraw()
{
   
    
    if (!gameStarted)
    {
        startButton();
        if (mouseIsPressed === true 
            && (winMouseX > startButtonSizes["posX"])
            && (winMouseX < startButtonSizes["posX"] + startButtonSizes["widthX"])
            && (winMouseY > startButtonSizes["posY"])
            && (winMouseY < startButtonSizes["posY"] + startButtonSizes["widthY"]))
        {
            gameStarted = true;
        }
    }
    if (gameStarted)
    {
        if (winMouseX > startButtonSizes["posX"] - startButtonSizes["widthX"]*.25
        && (winMouseX < startButtonSizes["posX"] + startButtonSizes["widthX"]*1.3)
        && (winMouseY > startButtonSizes["posY"]- startButtonSizes["widthY"]*.25)
        && (winMouseY < startButtonSizes["posY"] + startButtonSizes["widthY"]*1.3))
        {
            startCircle();
            // Instructions
        }
    }
    createMaze();
    withinMaze();
    
}

function startButton()
{
    // Box Around
    strokeWeight(3);
    let c = color(2, 204, 0);
    fill(c);
    rect(startButtonSizes["posX"], startButtonSizes["posY"], 
    startButtonSizes["widthX"], startButtonSizes["widthY"]);
    // Text
    c = color(0,0,0);
    fill(c);
    textAlign(CENTER,CENTER);
    textSize(30);
    text("Start?",startButtonSizes["posX"], startButtonSizes["posY"],startButtonSizes["widthX"],startButtonSizes["widthY"]);
}
function startCircle()
{
    // Ellipse
    strokeWeight(3);
    let c = color(2, 204, 0);
    fill(c);
    ellipse(startButtonSizes["posX"] + startButtonSizes["widthX"]/2,
    startButtonSizes["posY"] + startButtonSizes["widthY"]/2,
    150, 75);
    // Text
    c = color(0,0,0);
    fill(c);
    textAlign(CENTER,CENTER);
    textSize(30);
    text("GOOO!!",startButtonSizes["posX"], startButtonSizes["posY"],startButtonSizes["widthX"],startButtonSizes["widthY"]);
}

function createMazeBorder()
{
    let c = color(0,0,0);
    strokeWeight(3)
    
    // Top Lines
    line(mazeBorder["leftX"],mazeBorder["topY"],325,125);
    line(mazeBorder["rightX"],mazeBorder["topY"],475,125);
    // Bottom Line
    line(mazeBorder["leftX"],mazeBorder["bottomY"],mazeBorder["rightX"],mazeBorder["bottomY"]);
    // Right Line
    line(mazeBorder["rightX"],mazeBorder["topY"],mazeBorder["rightX"],mazeBorder["bottomY"]);
    // Left Line
    line(mazeBorder["leftX"],mazeBorder["topY"],mazeBorder["leftX"],mazeBorder["bottomY"]);
}

function createMaze()
{
    createMazeBorder();

    
}
function withinMaze()
{

}


