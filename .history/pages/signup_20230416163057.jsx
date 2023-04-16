import GameCard from '@/components/GameCard/GameCard';
import gameImage3 from '../public/images/The Legend of Zelda.jpg';

function Signup() {
  const gameCardsData = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.",
      imageSrc: gameImage3,
      platform: "Nintendo Switch",
      genre: "Action-Adventure",
      rating: "9.5",
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.",
      imageSrc: gameImage3,
      platform: "Nintendo Switch",
      genre: "Action-Adventure",
      rating: "9.5",
    },
    {
      title: "Title of Second Game",
      description: "Description of second game.",
      // imageSrc: "path/to/second/game/image",
      platform: "Platform of second game",
      genre: "Genre of second game",
      rating: "Rating of second game",
    }
  ];

  return (
    <div className="flex justify-between">
      {gameCardsData.map((gameData, index) => (
        <GameCard
          key={index}
          title={gameData.title}
          description={gameData.description}
          imageSrc={gameData.imageSrc}
          platform={gameData.platform}
          genre={gameData.genre}
          rating={gameData.rating}
        />
      ))}
    </div>
  );
}

export default Signup;
