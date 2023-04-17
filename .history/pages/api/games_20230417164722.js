import axios from 'axios';

const RAWG_API_KEY = '3a86f83332614b9c8ffc5f2841996e94';

export async function getGames({ searchQuery = '', platform = '', genre = '' }) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}`, {
      params: {
        search: searchQuery,
        platforms: platform,
        genres: genre,
      },
    });
    const games = response.data.results;
    return games;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGameBySlug(slug) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${slug}?key=${RAWG_API_KEY}`);
    const game = response.data;
    return game;
  } catch (error) {
    window.alert.error(error);
    return null;
  }
}
