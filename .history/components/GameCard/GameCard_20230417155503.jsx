import Image from 'next/image';

function GameCard({ game }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={game?.background_image || '/images/game-placeholder.png'}
          alt={game?.name || 'Game placeholder image'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium">{game?.name || 'Untitled game'}</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-600">{game?.released || 'Unknown release date'}</p>
          <div className="flex items-center space-x-2">
            {game?.platforms?.map((platform) => (
              <span
                key={platform?.platform?.id}
                className="text-xs font-medium text-white bg-gray-900 rounded px-2 py-1"
              >
                {platform?.platform?.name}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-700">{game?.description_raw || 'No description available.'}</p>
      </div>
    </div>
  );
}

export default GameCard;
