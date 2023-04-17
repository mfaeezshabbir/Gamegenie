import PropTypes from "prop-types";
function GameCard({ game }) {
  if (!game) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full px-4 py-6 transition-colors duration-200 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50">
      <div className="relative flex items-center justify-center w-full mb-4 overflow-hidden bg-gray-200 rounded-lg aspect-w-10 aspect-h-6">
        <img
          src={game.backgroundImage}
          alt={game.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-lg font-medium text-gray-800">{game.name}</h2>
      <p className="text-sm text-gray-600">
        Released on {game.releaseDate}
      </p>
      <p className="text-sm text-gray-600">{game.description}</p>
      <div className="flex flex-wrap mt-2">
          <span
            className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
          >
            {game.platforms.join(", ")}
          </span>
      </div>
      <div className="flex flex-wrap mt-2">
          <span
            className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
          >
            {game.genres.join(", ")}
          </span>
      </div>
      <div className="flex items-center mt-2">
       
        <p className="text-sm text-gray-600">{game.rating.toFixed(1)}</p>
      </div>
    
    </div >
  );
}

// export default GameCard;



// import PropTypes from "prop-types";

// function GameCard({ game }) {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//       <img src={game.backgroundImage} alt={game.name} className="w-full" />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{game.name}</h2>
//         <p className="text-gray-500">{game.genres.join(", ")}</p>
//         <p className="text-gray-500">{game.platforms.join(", ")}</p>
//         <p className="text-gray-500">{game.releaseDate}</p>
//         <p className="text-gray-500">{game.rating}</p>
//         <p className="text-gray-500">{game.description}</p>
//       </div>
//     </div>
//   );
// }

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    platforms: PropTypes.arrayOf(PropTypes.string),
    releaseDate: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string
  }).isRequired
};

export default GameCard;
