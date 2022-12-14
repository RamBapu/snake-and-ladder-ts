//Interface for SnakePositions
interface ISnakePositions {
    [key:number]:number
}

//Interface for LadderPositions
interface ILadderPositions{
    [key:number]:number
}

//Snake start and end positions
export const snakePositions:ISnakePositions = {
    22: 11,
    98: 27,
    89: 5,
    45: 17,
    67: 39,
    59: 23,
  };
 
// Ladder start and end positions 
export const ladderPositions:ILadderPositions = {
    10: 21,
    26: 97,
    16: 80,
    19: 44,
    38: 66,
    24: 58,
  };