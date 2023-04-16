import { useState, useEffect } from 'react';
import GameCard from '@/components/GameCard/GameCard';

function GameCards() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch game data from API
    fetch('/api/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  // Group games into pairs for rendering two cards in each row
  const gamePairs = games.reduce((result, game, index) => {
    if (index % 2 === 0) {
      result.push([game]);
    } else {
      result[result.length - 1].push(game);
    }
    return result;
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {gamePairs.map((pair, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8">
          <div className="flex justify-between">
            {pair.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                description={game.description}
                imageSrc={game.imageSrc}
                platform={game.platform}
                genre={game.genre}
                rating={game.rating}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameCards;
