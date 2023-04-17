import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://api.rawg.io/api/games?key=3a86f83332614b9c8ffc5f2841996e94"
    );
    const games = response.data.results.map((game) => ({
      name: game.name,
      releaseDate: game.released,
      backgroundImage: game.background_image,
      rating: game.rating,
      platforms: game.platforms.map((platform) => platform.platform.name),
      genres: game.genres.map((genre) => genre.name),
      description: game.description_raw,
    }));
    res.status(200).json(games);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
