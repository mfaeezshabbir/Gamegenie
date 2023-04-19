import GameDetail from '../../components/GameDetails/GameDetails';
import axios from 'axios';

export async function getStaticProps(context) {
  const { slug } = context.params;

  const { data } = await axios.get(
    `https://api.rawg.io/api/games/${slug}?key=${process.env.RAWG_API_KEY}`
  );

  const game = {
    name: data.name,
    slug: data.slug,
    releaseDate: data.released,
    backgroundImage: data.background_image,
    rating: data.rating,
    platformsName: data.platforms.map((platform) => platform.platform.name),
    platformsSlug: data.platforms.map((platform) => platform.platform.slug),
    genresName: data.genres.map((genre) => genre.name),
    genresSlug: data.genres.map((genre) => genre.slug),
    description: data.description_raw,
  };

  return {
    props: { game },
  };
}

export default function GameDetailPage({ game }) {
  return (
    <div>
      <GameDetail game={game} />
    </div>
  );
}
