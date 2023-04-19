import { useRouter } from 'next/router';
import Image from 'next/image';

const GameDetails = ({ game }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">{game.name}</h1>
      <Image
        src={game.backgroundImage}
        alt={`${game.name} background`}
        width={1280}
        height={720}
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Platforms:</h2>
        <ul>
          {game.platformsںامع.map((platform) => (
            <li key={platform.slug}>{platform.name}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Genres:</h2>
        <ul>
          {game.genres.map((genre) => (
            <li key={genre.slug}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Description:</h2>
        <p>{game.description}</p>
      </div>
    </div>
  );
};

export default GameDetails;
