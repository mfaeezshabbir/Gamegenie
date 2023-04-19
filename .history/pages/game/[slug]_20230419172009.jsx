import axios from 'axios';
import GameDetails from '../../components/GameDetails/GameDetails';

const Game = ({ game }) => {
  return <GameDetails game={game} />;
};

export async function getStaticPaths() {
  const { data } = await axios.get(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=10`);
  const paths = data.results.map((game) => ({
    params: { slug: game.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(`https://api.rawg.io/api/games/${params.slug}?key=${process.env.RAWG_API_KEY}`);
  const game = {
    name: data.name,
    slug: data.slug,
    releaseDate: data.released,
    backgroundImage: data.background_image,
    rating: data.rating,
    platformsName: data.platforms.map((platform) => platform.platform.name),
    platformsSlug: data.platforms.map((platform) => platform.platform.slug),
    genresName: data.genres.map((genre) => genre.name),
    description: data.description_raw,
  };

  return {
    props: { game },
    revalidate: 60 * 60, // revalidate every hour
  };
}

export default Game;
