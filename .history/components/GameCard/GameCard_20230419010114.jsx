// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';
// import Image from 'next/image';

// function GameCard({ game }) {
//   if (!game) {
//     return null;
//   }

//   return (
//     /* This is a React component called `GameCard` that displays information about a video game. It
//     includes an image of the game, its name, release date, rating, genres, platforms, and
//     description. The component is styled using Tailwind CSS classes and includes some hover effects.
//     It also uses Font Awesome icons and the Next.js `Link` component for routing. The component
//     takes a `game` object as a prop, which contains all the necessary information about the game. */
//     // <Link href={`/games/${game.slug}`}>
//     <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <div className="relative">
//         <Link href={`/game/${game.id}`}>
//           {/* <a> */}
//           <img
//             src={game.backgroundImage}
//             alt={game.name}
//             width={640}
//             height={360}
//             layout="responsive"
//             objectFit="cover"
//             className="w-full h-48 sm:h-60 md:h-72 object-cover transition-opacity duration-300 hover:opacity-75"
//           />
//           {/* </a> */}
//         </Link>
//         <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-20 sm:h-24 md:h-28 p-4">
//           <h2 className="text-lg font-medium text-white font-montserrat mb-1 truncate">{game.name}</h2>
//           <p className="text-xs text-gray-300 font-roboto mb-2">{game.releaseDate}</p>
//           <div className="flex items-center">
//             <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
//             <p className="text-xs text-gray-300 font-roboto">{game.rating.toFixed(1)}/5</p>
//           </div>
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex flex-wrap bg-gray-200 m-2 p-2 justify-center">
//             {game.genres.map((genre, index) => (
//               <div key={index} className="inline-block">
//                 <Link href={`/category/${genre.slug}`}>
//                   <span className="text-xs text-gray-700 font-roboto">{genre}</span>
//                 </Link>
//                 {index !== game.genres.length - 1 && <span className="mx-1 text-gray-700 font-roboto">|</span>}
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-wrap bg-gray-200 m-2 p-2 justify-center">
//             {game.platforms.map((platform, index) => (
//               <div key={index} className="inline-block">
//                 <Link href={`/category/${platform.slug}`}>
//                   <span className="text-xs text-gray-700 font-roboto">{platform}</span>
//                 </Link>
//                 {index !== game.platforms.length - 1 && <span className="mx-1 text-gray-700 font-roboto">|</span>}
//               </div>
//             ))}
//           </div>


//         </div>
//         <p className="text-sm text-gray-500 font-roboto mb-4">{game.description}</p>
//         {/* <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
//             <p className="text-sm font-medium text-purple-600 font-roboto">{game.rating.toFixed(1)}/5</p>
//           </div>
//           <Link href={`/games/${game.slug}`} className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
//               Learn More
//           </Link>
//         </div> */}
//       </div>
//     </div>
//     // </Link>
//   );
// }

// GameCard.propTypes = {
//   game: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     backgroundImage: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string),
//     platforms: PropTypes.arrayOf(PropTypes.string),
//     releaseDate: PropTypes.string,
//     rating: PropTypes.number,
//     description: PropTypes.string
//   }).isRequired
// };

// export default GameCard;


