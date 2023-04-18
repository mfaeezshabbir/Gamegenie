import PropTypes from "prop-types";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function GameCard({ game }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  if (!game) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full px-4 py-6 transition-colors duration-200 bg-gradient-to-tr from-purple-700 to-slate-100 border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
      <div className="overflow-hidden rounded-lg ">
        <div className="relative flex items-center justify-center w-full mb-4 overflow-hidden bg-gray-200 rounded-lg h-60 transition-all duration-300 transform hover:scale-110">
          <img
            src={game.backgroundImage}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <h2 className="text-lg font-medium text-gray-800 font-montserrat">{game.name}</h2>
      <p className="text-sm text-gray-600 font-roboto">
        Released on {game.releaseDate}
      </p>
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
      <button onClick={toggleModal} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mt-3">
        More Info
      </button>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-100 px-4 py-3 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 font-montserrat">{game.name}</h3>
                <button onClick={toggleModal} className="absolute top-0 right-0 mr-4 mt-4 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-2">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-wrap items-center">
                  <div className="w-full sm:w-2/5">
                    <div className="relative mb-4">
                      <img
                        src={game.backgroundImage}
                        alt={game.name}
                        width={500}
                        height={300}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-3/5">
                    <p className="text-sm text-gray-600 font-roboto">
                      Released on {game.releaseDate}
                    </p>
                    <div className="flex flex-wrap mt-2">
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
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 font-roboto">{game.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameCard;
