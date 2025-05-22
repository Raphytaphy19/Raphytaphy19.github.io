const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

const circle = { x: 160, y: 200, r: 40, color: "pink" };
const rect = { x: 350, y: 150, width: 50, height: 100, color: "red", velocityY: 5 };
let score = 0;

let isShooting = false;
const shootingSpeed = 12;

let passedThroughWall = false;

function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

document.addEventListener("keydown", (event) => {
    const speed = 20; 

    if (event.key === "ArrowLeft") {
        circle.x -= speed;
        if (circle.x + circle.r < 0) circle.x = canvas.width + circle.r;
    }
    if (event.key === "ArrowRight") {
        circle.x += speed;
        if (circle.x - circle.r > canvas.width) {
            if (!passedThroughWall) {
                score++; // Increment the score
                passedThroughWall = true;
            }
            circle.x = -circle.r; // Wrap around to the left
        } else {
            passedThroughWall = false;
        }
    }
    if (event.key === "ArrowUp") {
        circle.y -= speed;
        if (circle.y + circle.r < 0) circle.y = canvas.height + circle.r;
    }
    if (event.key === "ArrowDown") {
        circle.y += speed;
        if (circle.y - circle.r > canvas.height) circle.y = -circle.r;
    }
    if (event.key === " " && circle.x >= canvas.width / 2 && !isShooting) {
        isShooting = true;
    }
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
 if (isShooting) {
        circle.x += shootingSpeed;

        if (circle.x - circle.r > canvas.width) {
            if (!passedThroughWall) {
                score++;
                passedThroughWall = true;
            }
            circle.x = -circle.r; 
            isShooting = false;   
        }
    }
    drawCircle(circle.x, circle.y, circle.r, circle.color);
    drawRectangle(rect.x, rect.y, rect.width, rect.height, rect.color);

    drawScore();

    rect.y += rect.velocityY;
    if (rect.y <= 0 || rect.y + rect.height >= canvas.height) {
        rect.velocityY *= -1;
    }
    const distX = Math.abs(circle.x - (rect.x + rect.width / 2));
    const distY = Math.abs(circle.y - (rect.y + rect.height / 2));

    if (
        distX <= rect.width / 2 + circle.r &&
        distY <= rect.height / 2 + circle.r
    ) {
        score = 0;
    }
    requestAnimationFrame(update);
}
update();
