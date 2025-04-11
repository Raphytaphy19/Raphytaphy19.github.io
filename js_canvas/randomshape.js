const canvas = document. getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0,0,400,400);

ctx.fillStyle = "white";
ctx.fillRect(0,300,400,100);

function rectangle(x,y,r){
   ctx.beginPath();
   ctx.arc(x,y,r,0,2*Math.PI);
   ctx.fill();
}

