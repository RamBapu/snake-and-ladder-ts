import { useRef } from "react";
import "./GamePad.css";
import SnakeLadderImg from "../../Images/Snake-ladder-cover.jpg";
import { snakePositions, ladderPositions } from "../../Util/SnakeAndLadderPositions";
import { useContext } from "react";
import { AppContext } from "../../App";
import { game } from "../../Util/Game";
import { Link } from "react-router-dom";

const GamePad = () => {
  const { playerInfo, setPlayerInfo } = useContext(AppContext);
  const diceRef = useRef<HTMLTextAreaElement>(null);

  //In this function,when the dice is rolled Player is set to new player position.
  const rollDice = () => {
    let currentPlayer = playerInfo.find((playerEl) => {
      return playerEl.player === game.whoseTurnToPlay;
    });

    let maxValue: number = 6;
    let minValue: number = 0;
    let diceCount: number = Math.ceil(Math.random() * (maxValue - minValue));
    diceRef.current!.value = String(diceCount);

    let newPlayerPosition = currentPlayer!.playerPosition + diceCount;

    //Player Position is rendered based on snake/ladder.
    if (newPlayerPosition < 100) {
      if (snakePositions[newPlayerPosition]) newPlayerPosition = snakePositions[newPlayerPosition];
      else if (ladderPositions[newPlayerPosition])
        newPlayerPosition = ladderPositions[newPlayerPosition];
    } else if (newPlayerPosition > 100) {
      newPlayerPosition = currentPlayer!.playerPosition;
    } else {
      game.gameWinner = currentPlayer!.player;
    }

    //Setting the Turn of play to the next player.
    if (currentPlayer!.playerId < game.numberOfPlayers) {
      game.whoseTurnToPlay = `Player ${currentPlayer!.playerId + 1}`;
    } else {
      game.whoseTurnToPlay = `Player 1`;
    }

    //Setting the Player new position to player info
    setPlayerInfo((currentPlayerInfo) =>
      currentPlayerInfo.map((playerEl) => {
        if (playerEl.playerId === currentPlayer!.playerId) {
          return { ...playerEl, playerPosition: newPlayerPosition };
        }
        return playerEl;
      })
    );
  };

  return (
    <>
      <div className="game-pad">
        <h2 className="game-title">Snake and Ladder Game</h2>
        <img className="snake-ladder-img" src={SnakeLadderImg} alt="snake-ladder-img" />
        <div className="dices">
          <textarea className="box-area" ref={diceRef} disabled></textarea>
        </div>
        <div className="player-button-grid">
          {playerInfo.map((player) => {
            return (
              player.playerId && (
                <button
                  className={`player${player.playerId} button`}
                  onClick={rollDice}
                  disabled={game.whoseTurnToPlay === player.player ? false : true}
                  key={player.playerId}>{`Player${player.playerId}`}</button>
              )
            );
          })}
        </div>
        <button>
          <Link to="/" className="button reset-btn">
            Reset
          </Link>
        </button>
      </div>
    </>
  );
};

export default GamePad;
