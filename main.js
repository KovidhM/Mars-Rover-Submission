var canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
var roverX= 10
var roverY= 10
var roverw= 100
var roverh= 100
rover= "rover.png"
background= "mars.jpg"

function add()
{
    background_Image= new Image();
    background_Image.onload= uploadBackground;
    background_Image.src= background;
    
    rover_Image= new Image();
    rover_Image.onload= uploadrover;
    rover_Image.src= rover;

}

function uploadBackground()
{
    ctx.drawImage(background_Image, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_Image, roverX, roverY, roverw, roverh);
}

window.addEventListener("keydown", kd);

function kd(e)
{
    var number= e.keyCode;
    console.log(number)
    
    if(number=='38')
    {
        up();
        console.log("up was pressed")
    }

    if(number=='40')
    {
        down();
        console.log("down was pressed")
    }

    if(number=='39')
    {
        right();
        console.log("right was pressed")
    }

    if(number=='37')
    {
        left();
        console.log("left was pressed")
    }
}

