import GameCard from '@/components/GameCard/GameCard'
import gameImage1 from '../public/images/Game1.jpg';
import gameImage2 from '../public/images/Game2.jpg';
import gameImage3 from '../public/images/Game3.jpg';
import gameImage4 from '../public/images/Game4.jpg';

function GamesList() {
  const games = [
    {
      title: "Game 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: gameImage1,
      platform: "PS5",
      genre: "Action",
      rating: "8.5"
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
