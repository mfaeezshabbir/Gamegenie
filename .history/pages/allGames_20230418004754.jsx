import { useEffect, useState } from 'react';
import { getGames } from './api/games';
import GameCard from '../components/GameCard/GameCard';

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const data = await getGames();
      setGames(data);
    }

    fetchGames();
  }, []);

  return (
    <div>
      <h1>Popular Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            image={game.background_image}
            releaseDate={game.released}
            rating={game.rating}
            platforms={game.platforms.map((platform) => platform.platform.name)}
            genres={game.genres.map((genre) => genre.name)}
            description={game.description_raw}
          />
        ))}
      </div>
    </div>
  );
}
