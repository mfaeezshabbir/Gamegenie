import { useRouter } from 'next/router';
import GameDetails from '../../components/GameDetails/GameDetails';

function Game() {
  const router = useRouter();
  const { slug } = router.query;

  // fetch game data using the slug parameter
  const game = fetchGameBySlug(slug);

  return (
    <div>
      <h1>{game.name}</h1>
      <GameDetails game={game} />
    </div>
  );
}

export default Game;
