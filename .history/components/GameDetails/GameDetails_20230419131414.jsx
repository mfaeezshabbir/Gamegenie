import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const rawgKey = process.env.RAWG_API_KEY;

export default function GameDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchGameDetails = async () => {
        const response = await axios.get(`https://api.rawg.io/api/games/${slug}?key=${rawgKey}`);
        setGameDetails(response.data);
      };
      fetchGameDetails();
    }
  }, [slug]);

  if (!gameDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{gameDetails.name}</title>
      </Head>
      <div className="flex flex-col items-center pt-8">
        <h1 className="text-4xl font-bold">{gameDetails.name}</h1>
        <div className="my-4">
          <Image
            src={gameDetails.background_image}
            alt={`${gameDetails.name} background`}
            width={720}
            height={360}
          />
        </div>
        <div className="w-full max-w-5xl px-4">
          <p className="my-4 text-xl">{gameDetails.description_raw}</p>
          <div className="flex flex-col md:flex-row md:justify-between my-4">
            <div className="my-2 md:my-0">
              <span className="font-semibold">Genres:</span>{' '}
              {gameDetails.genres.map((genre) => (
                <span key={genre.id} className="mx-1">
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="my-2 md:my-0">
              <span className="font-semibold">Platforms:</span>{' '}
              {gameDetails.platforms.map((platform) => (
                <span key={platform.platform.id} className="mx-1">
                  {platform.platform.name}
                </span>
              ))}
            </div>
            <div className="my-2 md:my-0">
              <span className="font-semibold">Released:</span>{' '}
              {new Date(gameDetails.released).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default 