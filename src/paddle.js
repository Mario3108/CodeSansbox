export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;
    this.speed = 0;
    this.maxSpeed = 10;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - 10 - this.height
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#0fe";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }

  stop() {
    this.speed = 0;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }
}
