import PropTypes from "prop-types";
import Link from 'next/link';
import React from 'react'

function GameCard({ game }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <Link href={`/game/${game.slug}`}>
          <img
            src={game.background_image}
            alt={`${game.name} cover`}
            className="w-full h-56 object-cover"
          />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/game/${game.slug}`} className="text-gray-900 hover:text-purple-700">
              {game.name}
          </Link>
        </h2>
        <p className="text-gray-700 mb-2">
          {game.released ? (
            <>
              <span className="font-semibold">Released:</span> {game.released}
              <br />
            </>
          ) : null}
          <span className="font-semibold">Platforms:</span>{' '}
          {game.platforms.map((platform, index) => (
            <React.Fragment key={platform.slug}>
              {index > 0 && <span className="mx-1">-</span>}
              <Link href={`/platform/${platform.slug}`}
                 className="text-gray-900 hover:text-purple-700">
                  {platform.name}
              </Link>
            </React.Fragment>
          ))}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Genres:</span>{' '}
          {game.genres.map((genre, index) => (
            <React.Fragment key={genre.slug}>
              {index > 0 && <span className="mx-1">-</span>}
              <Link href={`/genre/${genre.slug}`} className="text-gray-900 hover:text-purple-700">
                  {genre.name}
              </Link>
            </React.Fragment>
          ))}
        </p>
        <div className="text-gray-700 mb-2">
          <span className="font-semibold">Rating:</span>{' '}
          {game.rating || '-'}
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
