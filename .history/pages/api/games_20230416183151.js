import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: 'YOUR_API_KEY', // Replace with your actual API key
        page_size: 10, // Number of games to fetch per page
        ordering: '-rating', // Order games by rating in descending order
      },
    });

    const games = response.data.results.map(game => {
      return {
        id: game.id,
        name: game.name,
        rating: game.rating,
        released: game.released,
        background_image: game.background_image,
      };
    });

    res.status(200).json({ games });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
