export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        //izquierda
        case 37:
          paddle.moveLeft();
          break;
        //derecha
        case 39:
          paddle.moveRight();
          break;
        default:
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        //izquierda
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        //derecha
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
      }
    });
  }
}
