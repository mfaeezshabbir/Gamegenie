import Image from 'next/image';
import GameDetails from '../../components/GameDetails/GameDetails';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../../pages/game/[slug];

const Game = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: gameData, error: gameError } = useSWR(`/api/games/${slug}`, fetcher);

  if (gameError) {
    return <div>Failed to load game data.</div>;
  }

  if (!gameData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    slug: gameSlug,
    releaseDate,
    backgroundImage,
    rating,
    platformsName,
    genresName,
    description,
  } = gameData;

  return (
    <div>
      <Image src={backgroundImage} alt={`Cover image of ${name}`} width={1280} height={720} />
      <GameDetails
        name={name}
        slug={gameSlug}
        releaseDate={releaseDate}
        rating={rating}
        platforms={platformsName}
        genres={genresName}
        description={description}
      />
    </div>
  );
};

export default Game;
