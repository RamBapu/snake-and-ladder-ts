import React, { useState } from "react";
import { createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { GamePage } from "./Pages/GamePage/GamePage";

interface IPlayerInfo {
  playerId: number;
  player: string;
  playerColor: string;
  playerPosition: number;
}

type IPlayerInfoContextType = {
  playerInfo: IPlayerInfo[],
  setPlayerInfo: React.Dispatch<React.SetStateAction<IPlayerInfo[]>>
}

const IPlayerContextState = {
  playerInfo:[],
  setPlayerInfo:() => {},
}

export const AppContext = createContext<IPlayerInfoContextType>(IPlayerContextState);

function App() {
  //State of player information is maintained globallly.
  const [playerInfo, setPlayerInfo] = useState<IPlayerInfo[]>([]);

  return (
    <>
      <div className="App">
        <AppContext.Provider value={{ playerInfo, setPlayerInfo }}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gamepage" element={<GamePage />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
