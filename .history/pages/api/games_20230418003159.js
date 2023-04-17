import axios from 'axios';

const API_URL = 'https://rawg-video-games-database.p.rapidapi.com/games';

const API_KEY = process.env.RAPIDAPI_KEY;

export async function getGames() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
