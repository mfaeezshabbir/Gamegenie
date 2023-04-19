import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import styles from "../styles/GameDetails.module.css";

const API_URL = "https://api.rawg.io/api/games/";

function GameDetails({ game }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={game.backgroundImage}
          alt={game.name}
          width={640}
          layout="responsive"
          objectFit="cover"
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-4 right-4">
          <FontAwesomeIcon icon={faHeart} className="text-yellow-500 mr-1" />
          <span className="text-gray-700 font-medium text-xl">{game.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-gray-900 font-semibold text-2xl">{game.name}</h1>
        <p className="text-gray-700 my-4">{game.description}</p>
        <p className="text-gray-700 mb-2">
          {game.releaseDate ? (
            <>
              <span className={`font-semibold ${styles.heading}`}>Released:</span> {new Date(game.releaseDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <br />
            </>
          ) : null}
          <span className={`font-semibold ${styles.heading}`}>Platforms:</span>{" "}
          {game.platformsName.map((platform, index) => (
            <React.Fragment key={platform.slug}>
              {index > 0 && <span className="mx-1">-</span>}
              <Link href={`/platform/${game.platformsSlug[index].slug}`} className="text-gray-900 hover:text-purple-700">
                {platform.name}
              </Link>
            </React.Fragment>
          ))}
        </p>
        <p className="text-gray-700 mb-2">
          <span className={`font-semibold ${styles.heading}`}>Genres:</span>{" "}
          {game.genresName.map((genre, index) => (
            <React.Fragment key={genre.slug}>
              {index > 0 && <span className="mx-1">-</span>}
              <Link href={`/genre/${game.genresSlug[index].slug}`} className="text-gray-900 hover:text-purple-700">
                {genre.name}
              </Link>
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

GameDetails.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    platforms: PropTypes.arrayOf(PropTypes.string),
    releaseDate: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default GameDetails;
