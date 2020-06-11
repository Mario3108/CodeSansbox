import Brick from "/src/brick";

export function buildLevel(level){
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if(brick === 1){
        let position = {
          x: 80 * brickIndex,
          y: 20 + 24 * rowIndex
        };
      }
    });
  });
}


export cost level1 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];