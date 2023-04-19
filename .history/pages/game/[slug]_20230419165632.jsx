import axios from 'axios';
import GameDetails from '../../components/GameDetails/GameDetails';

const GameSlug = ({ game }) => {
  return (
    <div>
      <GameDetails game={game} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data } = await axios.get('/api/games');
  const games = data.results;

  const paths = games.map((game) => ({
    params: { slug: game.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await axios.get(`/api/games/${slug}`);

  const game = {
    name: data.name,
    slug: data.slug,
    releaseDate: data.released,
    backgroundImage: data.background_image,
    rating: data.rating,
    platformsName: data.platforms.map((platform) => ({
      name: platform.platform.name,
    })),
    genresName: data.genres.map((genre) => ({
      name: genre.name,
    })),
    description: data.description_raw,
  };

  return {
    props: {
      game,
    },
  };
};

export default GameSlug;

export const fetcher = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch data');
    }
  };
  
//   export default fetcher;