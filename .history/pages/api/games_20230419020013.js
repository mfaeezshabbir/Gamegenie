import axios from "axios";

const rawgKey = process.env.RAWG_API_KEY

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${rawgKey}`
    );
    const games = response.data.results.map((game) => ({
      name: game.name,
      releaseDate: game.released,
      backgroundImage: game.background_image,
      rating: game.rating,
      platforms: game.platforms.map((platform) => platform.platform.slug),
      genres: game.genres.map((genre) => genre.slug),
      description: game.description_raw,
    }));
    res.status(200).json(games);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
