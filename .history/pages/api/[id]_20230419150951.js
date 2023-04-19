import axios from "axios";

const API_URL = "https://api.rawg.io/api/games/";

export default async function handler(req, res) {
  const { id } = req.query;
  const { data } = await axios.get(`${API_URL}${id}`);

  res.status(200).json(data);
}
