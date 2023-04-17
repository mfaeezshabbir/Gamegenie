// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://rawg-video-games-database.p.rapidapi.com/games',
//   params: {key: '3a86f83332614b9c8ffc5f2841996e94'},
//   headers: {
//     'X-RapidAPI-Key': '439d9380abmsh135669ed4bb8912p181a72jsne5128d747292',
//     'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });


import axios from "axios";

const rawgAPI = 

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key={3a86f83332614b9c8ffc5f2841996e94}`
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
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
