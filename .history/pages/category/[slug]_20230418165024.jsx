import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../../components/GameCard/GameCard';
import CategoryList from '../../components/CategoryList/CategoryList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/games?categories=${slug}`);
      setGames(result.data);
    };
    fetchData();
  }, [slug]);

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>GameGenie | {slug} Category</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <SearchBar />
        <CategoryList />
      </header>
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center bg-purple-700 p-2 uppercase font-bold text-gray-50 ">
            {slug} Category
          </h1>
          <div className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
