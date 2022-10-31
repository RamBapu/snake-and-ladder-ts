//Interface for Game
interface IGame {
  numberOfPlayers: number;
  players: string[];
  playerColors: string[];
  isGameStarted: boolean;
  whoseTurnToPlay: string;
  gameWinner: string;
}

//Game Configuration
export const game: IGame = {
  numberOfPlayers: 0,
  players: [],
  playerColors: ["red", "yellow", "blue", "green"],
  isGameStarted: false,
  whoseTurnToPlay: "Player 1",
  gameWinner: "",
};
