import Image from 'next/image';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

function GameCard({ game }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/game/${game.slug}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer" onClick={handleClick}>
      <div className="relative h-48">
        <Image src={game.background_image} alt={game.name} layout="fill" objectFit="cover" />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-medium text-gray-900">{game.name}</h2>
        {game.released && <p className="text-gray-500 text-sm">{format(new Date(game.released), 'MMMM dd, yyyy')}</p>}
        <div className="flex items-center mt-2">
          {game.platforms &&
            game.platforms.map((platform) => (
              <span key={platform.platform.id} className="text-sm font-medium text-gray-500 mr-2">
                {platform.platform.name}
              </span>
            ))}
        </div>
        <div className="flex items-center mt-2">
          {game.genres &&
            game.genres.map((genre) => (
              <span key={genre.id} className="text-sm font-medium text-gray-500 mr-2">
                {genre.name}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
