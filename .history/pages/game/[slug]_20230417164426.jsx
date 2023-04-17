// // pages/game/[slug].js

// import { getGameBySlug } from '../../api/games';

// function Game({ game }) {
//     const { name, background_image, released, rating, ratings_count, platforms, genres, description } = game;

//     return (
//         <div>
//             <h1>{name}</h1>
//             <img src={background_image} alt={`${name} Cover`} />
//             <p>Released: {released}</p>
//             <p>Rating: {rating}</p>
//             <p>Ratings Count: {ratings_count}</p>
//             <p>Platforms: {platforms.map(platform => platform.platform.name).join(', ')}</p>
//             <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
//             <p>Description: {description}</p>
//         </div>
//     );
// }

// export async function getServerSideProps({ params }) {
//     const game = await getGameBySlug(params.slug);
//     return {
//         props: { game },
//     };
// }

// export default Game;

import { getGameBySlug } from '../api/games';
import GameCard from '../../components/GameCard';

function GamePage({ game }) {
  return (
    <div className="container mx-auto my-10">
      <GameCard game={game} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const game = await getGameBySlug(params.slug);
  return {
    props: { game },
  };
}

export default GamePage;
