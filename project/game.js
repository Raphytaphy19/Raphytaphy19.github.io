const canvas = document. getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "lightblue";
ctx.fillRect(0,0,400,400);

function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}
drawCircle(160, 200, 40, "pink")

function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawRectangle(350, 150, 50, 100, "red");

