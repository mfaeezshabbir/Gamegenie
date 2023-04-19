import axios from "axios";

const API_URL = 
    `https://api.rawg.io/api/games?key=${rawgKey}`
  );
export default async function handler(req, res) {
const { slug } = req.query;
const { data } = await axios.get(`${API_URL}${slug}`);

res.status(200).json(data);
}