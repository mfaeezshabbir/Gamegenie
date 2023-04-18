import axios from "axios";

const API_URL = "https://api.rawg.io/api";

export async function getGames(page = 1, pageSize = 12) {
  const url = `${API_URL}/games?page=${page}&page_size=${pageSize}`;
  const response = await axios.get(url);
  return response.data;
}

export async function getGame(slug) {
  const url = `${API_URL}/games/${slug}`;
  const response = await axios.get(url);
  return response.data;
}

export async function getGamesByCategory(categorySlug, page = 1, pageSize = 12) {
  const url = `${API_URL}/games?${categorySlug}&page=${page}&page_size=${pageSize}`;
  const response = await axios.get(url);
  return response.data;
}
