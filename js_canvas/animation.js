const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let dx = 3;
let y = 0;
let dy = 3;

//define functions
function drawRect(x,y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function animate() {
    drawRect(x,y);

    // TODO: Add some code here 
    //  that will change the rectangle's position
    x += dx;
    y += dy;

     if (x + 50 > canvas.width || x < 0) {
        dx = -dx;
    }
if (y + 50 > canvas.height || y < 0) {
        dy = -dy;
    }

    requestAnimationFrame(animate);
}
    animate();
