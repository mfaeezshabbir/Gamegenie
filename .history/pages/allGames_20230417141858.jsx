import GameCard from '@/components/GameCard/GameCard'
import gameImage1 from '../public/images/The Legend of Zelda.jpg';
import gameImage2 from '../public/images/The Legend of Zelda.jpg';
import gameImage3 from '../public/images/The Legend of Zelda.jpg';
import gameImage4 from '../public/images/The Legend of Zelda.jpg';

function GamesList() {
  const games = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.",
      imageSrc: gameImage1,
      platform: "Nintendo Switch",
      genre: "Action-Adventure",
      rating: "9.5",
    },
    {
      title: "Game 2",
      description: "Nulla vel metus scelerisque ante sollicitudin commodo.",
      imageSrc: gameImage2,
      platform: "Xbox Series X",
      genre: "RPG",
      rating: "9.0"
    },
    {
      title: "Game 3",
      description: "Duis nec risus vitae quam malesuada varius.",
      imageSrc: gameImage3,
      platform: "Nintendo Switch",
      genre: "Adventure",
      rating: "7.5"
    },
    {
      title: "Game 4",
      description: "Suspendisse potenti. Nam in mi vestibulum, convallis velit ac, hendrerit nibh.",
      imageSrc: gameImage4,
      platform: "PC",
      genre: "Strategy",
      rating: "8.0"
    }
  ];

  const rows = [];
  for (let i = 0; i < games.length; i += 2) {
    rows.push(
      <div className="flex justify-between" key={i}>
        <GameCard
          title={games[i].title}
          description={games[i].description}
          imageSrc={games[i].imageSrc}
          platform={games[i].platform}
          genre={games[i].genre}
          rating={games[i].rating}
        />
        {i + 1 < games.length && (
          <GameCard
            title={games[i + 1].title}
            description={games[i + 1].description}
            imageSrc={games[i + 1].imageSrc}
            platform={games[i + 1].platform}
            genre={games[i + 1].genre}
            rating={games[i + 1].rating}
          />
        )}
      </div>
    );
  }

  return <div>{rows}</div>;
}

export default GamesList;

// import { useState, useEffect } from 'react';
// import GameCard from '@/components/GameCard/GameCard';

// function GameCards() {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     // Fetch game data from API
//     fetch('/api/games')
//       .then((response) => response.json())
//       .then((data) => setGames(data));
//   }, []);

//   // Group games into pairs for rendering two cards in each row
//   const gamePairs = games.reduce((result, game, index) => {
//     if (index % 2 === 0) {
//       result.push([game]);
//     } else {
//       result[result.length - 1].push(game);
//     }
//     return result;
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-between">
//       {gamePairs.map((pair, index) => (
//         <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8">
//           <div className="flex justify-between">
//             {pair.map((game) => (
//               <GameCard
//                 key={game.id}
//                 title={game.title}
//                 description={game.description}
//                 imageSrc={game.imageSrc}
//                 platform={game.platform}
//                 genre={game.genre}
//                 rating={game.rating}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GameCards;

// import { useState, useEffect } from 'react';
// import GameCard from '@/components/GameCard/GameCard';

// function GamesPage() {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     async function fetchGames() {
//       const response = await fetch('./game/index');
//       const data = await response.json();
//       setGames(data);
//     }
//     fetchGames();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-6">
//       {games.map(game => (
//         <GameCard
//           key={game.id}
//           title={game.title}
//           description={game.description}
//           imageSrc={game.imageSrc}
//           platform={game.platform}
//           genre={game.genre}
//           rating={game.rating}
//         />
//       ))}
//     </div>
//   );
// }

// export default GamesPage;
