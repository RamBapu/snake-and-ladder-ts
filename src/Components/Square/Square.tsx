import { useContext } from "react";
import "./Square.css";
import LadderImg from "../../Images/Ladder.jpg";
import SnakeImg from "../../Images/Snake.jpg";
import HomeImg from "../../Images/Home.png";
import { snakePositions, ladderPositions } from "../../Util/SnakeAndLadderPositions";
import { AppContext } from "../../App";

interface IPropTypes{
  squareNumber:number
}

const Square = (props:IPropTypes) => {
  const { playerInfo } = useContext(AppContext);

  return (
    <>
      <div className="snake-ladder-square">
        <div className="square-number">{props.squareNumber}</div>

        {props.squareNumber === 100 && <img className="home-img" src={HomeImg} alt="Home-img" />}

        {snakePositions[props.squareNumber] && (
          <>
            <img className="snake-img" src={SnakeImg} alt="Snake-img" />
            <div className="snake-positions">
              {props.squareNumber + "-" + snakePositions[props.squareNumber]}{" "}
            </div>
          </>
        )}
        {ladderPositions[props.squareNumber] && (
          <>
            <img className="ladder-img" src={LadderImg} alt="Ladder-img" />
            <div className="ladder-positions">
              {props.squareNumber + "-" + ladderPositions[props.squareNumber]}{" "}
            </div>
          </>
        )}

        {playerInfo.map((player) => {
          return (
            player.playerPosition === props.squareNumber && (
              <div className={`coin coin-${player.playerId}`} key={player.playerId} />
            )
          );
        })}
      </div>
    </>
  );
};

export default Square;
