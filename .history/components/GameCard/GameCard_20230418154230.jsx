import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

function GameCard({ game }) {
  if (!game) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Link href={`/game/${game.id}`}>
          {/* <a> */}
            <Image
              src={game.backgroundImage}
              alt={game.name}
              width={640}
              height={360}
              layout="responsive"
              objectFit="cover"
              className="w-full h-48 sm:h-60 md:h-72 object-cover transition-opacity duration-300 hover:opacity-75"
            />
          {/* </a> */}
        </Link>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-20 sm:h-24 md:h-28 p-4">
          <h2 className="text-lg font-medium text-white font-montserrat mb-1 truncate">{game.name}</h2>
          <p className="text-xs text-gray-300 font-roboto mb-2">{game.releaseDate}</p>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
            <p className="text-xs text-gray-300 font-roboto">{game.rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 font-roboto mb-2">{game.description}</p>
        <div className="flex flex-wrap mb-2">
          {game.genres.map((genre, index) => (
            <span key={index} className="inline-block mr-2 mb-2 px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-full font-roboto">{genre}</span>
          ))}
        </div>
        <div className="flex flex-wrap">
          {game.platforms.map((platform, index) => (
            <span key={index} className="inline-block mr-2 mb-2 px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-full font-roboto">{platform}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
