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
    <div className="mt-10">
  <h1 className="text-3xl text-center bg-purple-700 py-2 text-white font-bold uppercase tracking-wide">Popular Games</h1>
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {games.map((game) => (
      <div key={game.id} className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
        <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{game.name}</h2>
          <p className="text-gray-600">{game.released}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm font-medium text-purple-600">{game.rating}/5</span>
            <div className="flex items-center space-x-2">
              {game.platforms.map((platform) => (
                <span key={platform.platform.id} className="text-sm font-medium text-gray-500">{platform.platform}</span>
              ))}
            </div>
          </div>
          <p className="mt-2 text-gray-500 text-sm">{game.genres.map((genre) => genre.name).join(", ")}</p>
          <p className="mt-2 text-gray-500 text-sm">{game.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
