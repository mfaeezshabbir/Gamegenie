// api/games.js

import axios from 'axios';

const API_URL = 'https://api.rawg.io/api';

export async function getGameBySlug(slug) {
  try {
    const response = await axios.get(`${API_URL}/games/${slug}`);
    const {
      name,
      background_image: coverImage,
      released: releaseDate,
      platforms,
      genres,
      rating,
      description_raw: description,
      website,
    } = response.data;
    const game = {
      name,
      coverImage,
      releaseDate,
      platforms: platforms.map((platform) => platform.platform.name).join(', '),
      genres: genres.map((genre) => genre.name).join(', '),
      rating,
      description,
      website,
    };
    return game;
  } catch (error) {
    console.error(error);
    return null;
  }
}
