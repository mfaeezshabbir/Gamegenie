import axios from "axios";

const rawgKey = process.env.RAWG_API_KEY

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${rawgKey}`
    );
    /* This code is mapping over the `results` array in the `response.data` object returned from the
    RAWG API. For each `game` object in the `results` array, it creates a new object with specific
    properties such as `name`, `releaseDate`, `backgroundImage`, `rating`, `platforms`, `genres`,
    and `description`. The `platforms` and `genres` properties are created by mapping over the
    `platforms` and `genres` arrays within each `game` object and extracting the `name` property
    from the nested `platform` and `genre` objects. The resulting array of objects is assigned to
    the `games` constant. */
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
