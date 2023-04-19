import axios from "axios";
import GameDetails from "../../components/GameDetails/GameDetails";

const GameSlug = ({ game }) => {
  return <GameDetails game={game} />;
};

export async function getStaticPaths() {
  // Fetch the list of games from the API
  const response = await axios.get(`${process.env.API_URL}/games`);
  const games = response.data.results;

  // Generate the paths for each game slug
  const paths = games.map((game) => ({
    params: { slug: game.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the game data from the API using the slug parameter
  const response = await axios.get(
    `${process.env.API_URL}/games/${params.slug}`
  );
  const game = response.data;

  return { props: { game } };
}

export default GameSlug;
