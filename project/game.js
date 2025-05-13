const canvas = document. getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

const circle = { x: 160, y: 200, r: 40, color: "pink" };
const rect = { x: 350, y: 150, width: 50, height: 100, color: "red", velocityY: 5 };
let score = 0;

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
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

     
    rect.y += rect.velocityY;
    if (rect.y <= 0 || rect.y + rect.height >= canvas.height) {
        rect.velocityY *= -1;
    }

    drawRectangle(rect.x, rect.y, rect.width, rect.height, rect.color);
    drawCircle(circle.x, circle.y, circle.r, circle.color);

    requestAnimationFrame(update);
}

document.addEventListener("keydown", (event) => {
    const speed = 25;
    if (event.key === "ArrowLeft") circle.x -= speed;
    if (event.key === "ArrowRight") circle.x += speed;
    if (event.key === "ArrowUp") circle.y -= speed;
    if (event.key === "ArrowDown") circle.y += speed;
});
document.addEventListener("keydown", (event) => {
    const speed = 20; // Circle movement speed

    if (event.key === "ArrowLeft") {
        circle.x -= speed;
        if (circle.x + circle.r < 0) circle.x = canvas.width + circle.r;
    }
    if (event.key === "ArrowRight") {
        circle.x += speed;
        if (circle.x - circle.r > canvas.width) circle.x = -circle.r;
	score++;
    }
    if (event.key === "ArrowUp") {
        circle.y -= speed;
        if (circle.y + circle.r < 0) circle.y = canvas.height + circle.r;
    }
    if (event.key === "ArrowDown") {
        circle.y += speed;
        if (circle.y - circle.r > canvas.height) circle.y = -circle.r; 
    }
});
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle(circle.x, circle.y, circle.r, circle.color);
    drawScore();

    requestAnimationFrame(update);
}

update();
