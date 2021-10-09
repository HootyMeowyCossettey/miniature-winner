var last_Position_of_X, last_Position_of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color=document.getElementById("color");
width_of_line=3;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    last_Position_of_X=e.touches[0].clientX-canvas.offsetLeft;
    last_Position_of_Y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove");
    current_position_of_touch_X=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_Y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last position of X and Y coordinates=");
    console.log("x="+last_Position_of_X+"y="+last_Position_of_Y);
    ctx.moveTo(last_Position_of_X,last_Position_of_Y);
    console.log("current position of X and Y coordinates=");
    console.log("X="+current_position_of_touch_X+"Y="+current_position_of_touch_Y);
    ctx.lineTo(current_position_of_touch_X,current_position_of_touch_Y);
 ctx.stroke();
 last_Position_of_X=current_position_of_touch_X;
 last_Position_of_Y=current_position_of_touch_Y;




}
