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
        {game.platformsName.map((platform, index) => (
            <React.Fragment key={platform.slug}>
              {index > 0 && <span className="mx-1">-</span>}
              <Link href={`/platform/${game.platformsSlug[index].slug}`}
                className="text-gray-900 hover:text-purple-700">
                {platform.name}
              </Link>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Genres:</h2>
        <ul>
          {game.genresName.map((genre) => (
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
