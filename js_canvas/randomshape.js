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
// Circle
function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

drawCircle(110, 200, 50, "blue");
drawCircle(110, 120, 50, "pink"); 
drawCircle(160, 200, 50, "orange");
drawCircle(160, 120, 50, "teal");

// Triangle
function drawTriangle(color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(75, 75); // Starting point
    ctx.lineTo(100, 50);  // Top vertex
    ctx.lineTo(150, 100); // End point
    ctx.closePath();      // Connects back to the starting point
    ctx.fill();
}

drawTriangle("yellow");

// Rectangle
function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawRectangle(50, 250, 100, 50, "red");
drawRectangle(100, 250, 100, 50, "purple"); 
