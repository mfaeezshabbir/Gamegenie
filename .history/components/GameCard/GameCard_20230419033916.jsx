import PropTypes from "prop-types";
import Link from 'next/link';
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from './GameCard.module.css'
function GameCard({ game }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 card">
      <div className="relative overflow-hidden">
        {/* <Link href={`/game/${game.slug}`}> */}
        <img
          src={game.backgroundImage}
          alt={game.name}
          width={640}
          layout="responsive"
          objectFit="cover"
          className="w-full h-56 object-cover hover:scale-105 transition-transform ease-in-out duration-300"
        />
        {/* </Link> */}
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-20 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold flex items-center w-3/4">
            <Link href={`/game/${game.slug}`} className="text-gray-100 hover:text-purple-500">
              {game.name}
            </Link>
          </h2>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeart} className="text-yellow-500 mr-1" />
            <p className="text-sm font-medium text-gray-300 font-roboto">{game.rating.toFixed(1) || '-'}/5</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-2">
          {game.releaseDate ? (
            <>
              <span className={`font-semibold ${styles.heading}`}>Released:</span> {new Date(game.releaseDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <br />
              <br />
            </>
          ) : null}
          <span className={`font-semibold ${styles.heading}`}>Platforms:</span>{' '}
          {game.platformsName.map((platform, index) => (
            <React.Fragment key={platform.slug}>
              {index > 0 && <span className="mx-1">-</span>}
              <Link href={`/platform/${game.platformsSlug[index].slug}`}
                className="text-gray-900 hover:text-purple-700">
                {platform.name}
              </Link>
            </React.Fragment>
          ))}

        </p>
        <p className="text-gray-700 mb-2">
          <span className={`font-semibold ${styles.heading}`}>Genres:</span>{' '}
          {game.genresName.map((genre, index) => (
            <React.Fragment key={genre.slug}>
              {index > 0 && <span className="mx-1">-</span>}
              <Link href={`/genre/${game.genresSlug[index].slug}`}
                className="text-gray-900 hover:text-purple-700">
                {genre.name}
              </Link>
            </React.Fragment>
          ))}
        </p>
        <hr className="text-purple-800 my-3" />
        <div>
          <Link href={`/games/${game.slug}`}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
            Learn More
          </Link>
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
