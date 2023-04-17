// import Link from 'next/link';
// import Image from 'next/image';

// function GameCard({ game }) {
//   if (!game) {
//     return null;
//   }

//   return (
//     <div className="flex flex-col items-center w-full px-4 py-6 transition-colors duration-200 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50">
//       <div className="relative flex items-center justify-center w-full mb-4 overflow-hidden bg-gray-200 rounded-lg aspect-w-10 aspect-h-6">
//         <Image
//           src={game.backgroundImage}
//           alt={game.name}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <h2 className="text-lg font-medium text-gray-800">{game.name}</h2>
//       <p className="text-sm text-gray-600">
//         Released on {game.releaseDate}
//       </p>
//       <p className="text-sm text-gray-600">{description}</p>
//       <div className="flex flex-wrap mt-2">
//         {platforms.map((platform) => (
//           <span
//             key={`${id}-${platform}`}
//             className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
//           >
//             {game.platforms.join(", ")}
//           </span>
//         ))}
//       </div>
//       <div className="flex flex-wrap mt-2">
//         {genres.map((genre) => (
//           <span
//             key={`${id}-${genre}`}
//             className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
//           >
//             {game.genres.join(", ")}
//           </span>
//         ))}
//       </div>
//       <div className="flex items-center mt-2">
//         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="h-6 w-6 mr-1" viewBox="-6.4 -6.4 76.80 76.80" enableBackground="new 0 0 64 64" xmlSpace="preserve">
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.128"></g>
//           <g id="SVGRepo_iconCarrier">
//             <path fill="rgb(234 179 8)" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.975c0.296-0.149,0.626-0.225,0.956-0.225c0.446,0,0.891,0.139,1.272,0.414L32,53.082l16.471,8.295c0.367,0.185,0.773,0.276,1.179,0.276c0.331,0,0.661-0.077,0.956-0.225c0.627-0.483,0.946-1.244,0.822-1.999l-3.279-19.051l14.294-14.657C63.952,25.771,64.131,24.987,63.893,24.277z" />
//           </g>
//         </svg>
//         <p className="text-sm text-gray-600">{game.rating.toFixed(1)}</p>
//       </div>
//       <div className="flex justify-center mt-4">
//         <Link href={`/games/${id}`}>
//           <a className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//             View Details
//           </a>
//         </Link>
//       </div>
//     </div >
//   );
// }

// export default GameCard;



import PropTypes from "prop-types";

function GameCard({ game }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={game.backgroundImage} alt={game.name} className="w-full" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{game.name}</h2>
        <p className="text-gray-500">{game.genres.join(", ")}</p>
        <p className="text-gray-500">{game.platforms.join(", ")}</p>
        <p className="text-gray-500">{game.releaseDate}</p>
        <p className="text-gray-500">{game.rating}</p>
        <p className="text-gray-500">{game.description}</p>
      </div>
    </div>
  );
}

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
