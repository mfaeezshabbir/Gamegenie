import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard/GameCard";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("/api/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" mt-2 m-4" >
      <h1 className="text-3xl text-center bg-purple-700 p-2 uppercase font-bold text-gray-50 " >Popular Games</h1><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>
    </div>
  );
}