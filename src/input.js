import Paddle from "./paddle";

export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        //izquierda
        case 37:
          paddle.moveRight();
          break;
        //derecha
        case 39:
          paddle.moveLeft();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        //izquierda
        case 37:
          paddle.stop();
          break;
        //derecha
        case 39:
          paddle.stop();
          break;
      }
    });
  }
}
