// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const para1 = document.querySelector('.p1');
const para2 = document.querySelector('.p2');
const para3 = document.querySelector('.ger');

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


class Shape {

   constructor(x, y, velX, velY)
   {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;


   }


}


class Ball extends Shape {

   constructor(x, y, velX, velY, color, size) {
      super(x,y,velX,velY);
      this.color = color;
      this.size = size;
      this.exists= true;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(Math.abs(this.velX));
      }

      if ((this.x - this.size) <= 0) {
         this.velX = Math.abs(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(Math.abs(this.velY));
      }

      if ((this.y - this.size) <= 0) {
         this.velY = Math.abs(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }

   collisionDetect() {
      for (const ball of balls) {
          if (!(this === ball) && ball.exists) {
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



class EvilCircle extends Shape
{
   constructor(x,y)
   {
      super(x,y,20,20);
      this.color = 'white';
      this.size = 10;
      window.addEventListener("keydown", (e) => {
      switch (e.key) {
          case "a":
            this.x -= this.velX;
            break;
          case "d":
            this.x += this.velX;
            break;
          case "w":
            this.y -= this.velY;
            break;
          case "s":
            this.y += this.velY;
            break;
        }
       });

   }

   draw() {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
   }

   checkBounds() {
      if ((this.x + this.size) >= width) {
         this.x = -(Math.abs(this.size));
      }

      if ((this.x - this.size) <= 0) {
         this.x = Math.abs(this.size);
      }

      if ((this.y + this.size) >= height) {
         this.y = -(Math.abs(this.size));
      }

      if ((this.y - this.size) <= 0) {
         this.y = Math.abs(this.size);
      }
   }

collisionDetect() {
       for (const ball of balls) {
          if (ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.exists = false;
              cont3--;
              cont1++;
              para3.textContent = 'Ball count: '+ cont3;
              para1.textContent = 'Score Player 1: '+ cont1;

            }
         }
      }
   }
}




class EvilCircle2 extends Shape
{
   constructor(x,y)
   {
      super(x,y,20,20);
      this.color = 'red';
      this.size = 10;
      window.addEventListener("keydown", (e) => {
      switch (e.key) {
          case "j":
            this.x -= this.velX;
            break;
          case "l":
            this.x += this.velX;
            break;
          case "i":
            this.y -= this.velY;
            break;
          case "k":
            this.y += this.velY;
            break;
        }
       });

   }

   draw() {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
   }

   checkBounds() {
      if ((this.x + this.size) >= width) {
         this.x = -(Math.abs(this.size));
      }

      if ((this.x - this.size) <= 0) {
         this.x = Math.abs(this.size);
      }

      if ((this.y + this.size) >= height) {
         this.y = -(Math.abs(this.size));
      }

      if ((this.y - this.size) <= 0) {
         this.y = Math.abs(this.size);
      }
   }

collisionDetect() {
       for (const ball of balls) {
          if (ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.exists = false;
              cont3--;
              cont2++;
              para3.textContent = 'Ball count: '+ cont3;
              para2.textContent = 'Score Player 2: '+ cont2;

            }
         }
      }
   }
}

let cont1= 0;
let cont2 = 0;
let cont3 = 0;
const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
  cont3++;
  para3.textContent ='Ball Count: ' + cont3;


}



const evBall = new EvilCircle(3,3);
const evBall2 = new EvilCircle2(3,3);


function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const ball of balls) {

      if (ball.exists){
        ball.draw();
        ball.update();
        ball.collisionDetect();
      }
   }
   evBall.draw();
   evBall.checkBounds();
   evBall.collisionDetect();

   evBall2.draw();
   evBall2.checkBounds();
   evBall2.collisionDetect();

   requestAnimationFrame(loop);
}


loop();