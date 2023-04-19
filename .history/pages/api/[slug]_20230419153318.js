import axios from "axios";

const rawgKey = process.env.RAWG_API_KEY;

const API_URL = `https://api.rawg.io/api/games?key=${rawgKey}`;
