import GameCard from '@/components/GameCard/GameCard'
// import gameImage1 from '../public/images/The Legend of Zelda.jpg';
// import gameImage2 from '../public/images/The Legend of Zelda.jpg';
// import gameImage3 from '../public/images/The Legend of Zelda.jpg';
// import gameImage4 from '../public/images/The Legend of Zelda.jpg';

// function GamesList() {
//   const games = [
//     {
//       title: "The Legend of Zelda: Breath of the Wild",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.",
//       imageSrc: gameImage1,
//       platform: "Nintendo Switch",
//       genre: "Action-Adventure",
//       rating: "9.5",
//     },
//     {
//       title: "Game 2",
//       description: "Nulla vel metus scelerisque ante sollicitudin commodo.",
//       imageSrc: gameImage2,
//       platform: "Xbox Series X",
//       genre: "RPG",
//       rating: "9.0"
//     },
//     {
//       title: "Game 3",
//       description: "Duis nec risus vitae quam malesuada varius.",
//       imageSrc: gameImage3,
//       platform: "Nintendo Switch",
//       genre: "Adventure",
//       rating: "7.5"
//     },
//     {
//       title: "Game 4",
//       description: "Suspendisse potenti. Nam in mi vestibulum, convallis velit ac, hendrerit nibh.",
//       imageSrc: gameImage4,
//       platform: "PC",
//       genre: "Strategy",
//       rating: "8.0"
//     }
//   ];

//   const rows = [];
//   for (let i = 0; i < games.length; i += 2) {
//     rows.push(
//       <div className="flex justify-between" key={i}>
//         <GameCard
//           title={games[i].title}
//           description={games[i].description}
//           imageSrc={games[i].imageSrc}
//           platform={games[i].platform}
//           genre={games[i].genre}
//           rating={games[i].rating}
//         />
//         {i + 1 < games.length && (
//           <GameCard
//             title={games[i + 1].title}
//             description={games[i + 1].description}
//             imageSrc={games[i + 1].imageSrc}
//             platform={games[i + 1].platform}
//             genre={games[i + 1].genre}
//             rating={games[i + 1].rating}
//           />
//         )}
//       </div>
//     );
//   }

//   return <div>{rows}</div>;
// }

// export default GamesList;


function Games(props) {
  const { games } = props;
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

  if (!games) {
    return <div>No games found.</div>;
  }

  return (
    <div>
      {games.map((game) => (
        <GameCard key={game.slug} game={game} />
      ))}
    </div>
  );
}
export default Games;