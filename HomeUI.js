let gameOnePos = {x:100,y:400,wX:120,wY:60}
let gameTwoPos = {x:600,y:400,wX:120,wY:60}
let gameThreePos = {x:100,y:600,wX:120,wY:60}
let gameFourPos = {x:600,y:600,wX:120,wY:60}
//let backGroundColor = color(1,56,10);
//let textColor = color(256,256,156);
const menuBar = {daText:"Quit (Home)",x:105,y:5, wX:145,wY:100,
 daTextSize:20}
function menuBarUIDraw(daGame)
{
    strokeWeight(5)
    fill(color(1,56,10));
    rect(0,0,250,105);
    image(FROGPICTURE,5,5,100,100);
    //strokeWeight(0);
    if(aButton(menuBar["daText"],menuBar["x"],menuBar["y"],
    menuBar["wX"],menuBar["wY"],
    color(1,56,10),color(256,256,156),menuBar["daTextSize"],1))
    {
        //fill(color(5,0,0));
        //rect(400,400,10,10);
        homeUIActive = true;

        if (daGame === 1)
        ConnorGame = false;
        if (daGame === 2)
        Game2 = false;
        if (daGame === 3)
        Game3 = false;
        if (daGame === 4)
        Game4 = false;
        
        
    }
    


}

function HomeUIDraw()
{
    
    
    fill(color(1,56,10));
    rect(0,0,800,800);

    fill(color(256,256,156));
    textAlign(CENTER,CENTER) ;
    textSize(40);
    text("Fantastic Frog Adventures",0,0,800,150);
    //text(winMouseX,0,150,800,150);
    //text(winMouseY,0,300,800,150);

    fill(color(256,256,256));

    image(FROGPICTURE,1,1,150,150);
    image(FROGPICTURE,650,1,150,150);

    
    if (aButton("Connor's Game",gameOnePos["x"],gameOnePos["y"],
    gameOnePos["wX"],gameOnePos["wY"],
    color(256,256,256),color(0,0,0),20))
    {
        ConnorGame = true;
        homeUIActive = false;
    }
    

    if (aButton("Game 2",gameTwoPos["x"],gameTwoPos["y"],
    gameTwoPos["wX"],gameTwoPos["wY"],
    color(256,256,256),color(0,0,0),20))  
    {
    Game2 = true;
    homeUIActive = false;
    }
    if (aButton("Game 3",gameThreePos["x"],gameThreePos["y"],
    gameThreePos["wX"],gameThreePos["wY"],
    color(256,256,256),color(0,0,0),20))
    {
        Game3 = true;
        homeUIActive = false;
    }
    if (aButton("Game 4",gameFourPos["x"],gameFourPos["y"],
    gameFourPos["wX"],gameFourPos["wY"],
    color(256,256,256),color(0,0,0),20))  
    {
    Game4 = true;
    homeUIActive = false;
    }



    strokeWeight(3);
    //line(0,150,800,150);;

}