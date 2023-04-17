import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

function GameCard({ game }) {
  const {
    id,
    slug,
    name,
    released,
    background_image,
    rating,
    platforms,
    genres,
    description,
  } = game;

  return (
    <Link href={`/game/${slug}`}>
      <a className="flex flex-col items-center w-full px-4 py-6 transition-colors duration-200 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50">
        <div className="relative flex items-center justify-center w-full mb-4 overflow-hidden bg-gray-200 rounded-lg aspect-w-10 aspect-h-6">
          <Image
            src={background_image}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="text-lg font-medium text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">
          Released on {format(new Date(released), 'MMMM dd, yyyy')}
        </p>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex flex-wrap mt-2">
          {platforms.map((platform) => (
            <span
              key={platform.platform.id}
              className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
            >
              {platform.platform.name}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap mt-2">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="inline-flex items-center px-2 py-1 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-1 text-yellow-500 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1a1 1 0 00-.834.445l-3.5 5.5a1 1 0 00.166 1.341l2.5 2a1 1 0 01.3.7l-.6 3.5a1 1 0 001.449 1.054L10 14.791l3.134 1.654a1 1 0 001.449-1.055l-.6-3.5a1 1 0 01.3-.7l2.5-2a1 1 0 00.166-1.34l-3.5-5.5A1 1 0 0010 1zm0 3.109l1.834 2.891.411.684.916.141 2.583.4-1.875 1.845-.536.527.127.902.495 2.893-2.276-1.2-.292-.154-.292.154-1.2 2.276.495-2.893.127-.902-.536-.
