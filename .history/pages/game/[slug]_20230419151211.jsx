import axios from "axios";
import GameDetails from "../../components/GameDetails";

const API_URL = "https://api.rawg.io/api/games/";

export async function getStaticPaths() {
  const { data } = await axios.get(`${API_URL}?ordering=-released&page_size=10`);

  const paths = data.results.map((game) => ({
    params: { id: game.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(`${API_URL}${params.id}`);

  return { props: { game: data }, revalidate: 1 };
}

export default GameDetails;
