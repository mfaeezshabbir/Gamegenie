import axios from "axios";

const rawgKey = process.env.RAWG_API_KEY;

const API_URL = `https://api.rawg.io/api/games?key=${rawgKey}`;

export default async function handler(req, res) {
  const { slug } = req.query;
  const { data } = await axios.get(`${API_URL}${slug}`);

  res.status(500).json(data);
}
