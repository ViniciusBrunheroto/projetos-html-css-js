// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //object that directly represents the drawing area of the canvas and allows us to draw 2D shapes on it.

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//1 - function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//2- function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
  ctx.beginPath(); // to state that we want to draw a shape on the paper.
  ctx.fillStyle = this.color; //  to define what color we want the shape to be
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //trace an arc shape on the paper.
  ctx.fill(); //states "finish drawing the path we started with beginPath(), and fill the area it takes up with the color we specified earlier in fillStyle"
  }

  update() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
  collisionDetect() {
  for (const ball of balls) {
    if (this !== ball) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB();
      }
    }
  }
}


}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

//animation loop:  update the information in the program and then render the resulting view on each frame of the animation
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height); // update the information in the program and then render the resulting view on each frame of the animation;

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop); //t runs that function a set number of times per second to create a smooth animation.
}


loop();
