import React, { useState, useEffect } from "react";

const GameGenie = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://api.steampowered.com/ISteamApps/GetAppList/v2/")
      .then((response) => response.json())
      .then((data) => setGames(data.applist.apps));
  }, []);

  return (
    <div>
      <h1>Game Genie</h1>
      <ul>
        {games.map((game) => (
          <li key={game.appid}>
            <h3>{game.name}</h3>
            <p>App ID: {game.appid}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameGenie;
