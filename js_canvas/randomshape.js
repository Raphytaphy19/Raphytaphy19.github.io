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

drawCircle(110, 200, 50, "blue"); // Draw a blue circle
drawCircle(110, 120, 50, "pink"); // Draw a pink circle

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

drawTriangle("yellow"); // Draw a yellow triangle

// Rectangle
function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawRectangle(50, 250, 100, 50, "red"); // draw a red triangle

