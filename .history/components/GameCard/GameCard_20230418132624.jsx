import PropTypes from "prop-types";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function GameCard({ game }) {
  if (!game) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full px-4 py-6 transition-colors duration-200 bg-grad border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
      <div className="relative flex items-center justify-center w-full mb-4 overflow-hidden bg-gray-200 rounded-lg h-60 transition-all duration-300 transform hover:scale-105">
        <img
          src={game.backgroundImage}
          alt={game.name}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-lg font-medium text-gray-800 font-montserrat">{game.name}</h2>
      <p className="text-sm text-gray-600 font-roboto">
        Released on {game.releaseDate}
      </p>
      <p className="text-sm text-gray-600 font-roboto">{game.description}</p>
      <div className="flex flex-wrap mt-2 ">
        <span
          className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full font-roboto"
        >
          {game.platforms.join(", ")}
        </span>
      </div>
      <div className="flex flex-wrap mt-2">
        <span
          className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full font-roboto"
        >
          {game.genres.join(", ")}
        </span>
      </div>
      <div className="flex items-center mt-2">
        <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
        <p className="text-sm text-gray-600 font-roboto">{game.rating.toFixed(1)}</p>
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
