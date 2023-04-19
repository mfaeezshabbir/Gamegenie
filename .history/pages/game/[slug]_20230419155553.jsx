import axios from "axios";
import GameDetails from "../../components/GameDetails/GameDetails";


const rawgKey = process.env.RAWG_API_KEY;

const API_URL = `https://api.rawg.io/api/games/`

export async function getStaticPaths() {
    const { data } = await axios.get(`${API_URL}?key=${rawgKey}?ordering=-released&page_size=10`);

    const paths = data.results.map((game) => ({
        params: { slug: game.slug },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const { data } = await axios.get(`${API_URL}${params.slug}?key=${rawgKey}`);

    return { props: { game: data }, revalidate: 1 };
}

export default GameDetails;


export async function handler(req, res) {
    const { slug } = req.query;
    const { data } = await axios.get(`${API_URL}${slug}?key=${rawgKey}`);
  
    res.status(500).json(data);
  }
  