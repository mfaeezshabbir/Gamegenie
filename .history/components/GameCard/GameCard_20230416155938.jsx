import Image from "next/image";

const GameCard = ({ title, imageSrc, platform, genre, rating }) => {
    return (
        <div className="border-2 border-gray-800 rounded-md overflow-hidden shadow-md">
            <div className="relative h-48">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="px-4 py-3">
                <h3 className="font-medium text-lg mb-1">{title}</h3>
                <p className="text-gray-500 text-sm mb-2">{platform}</p>
                <p className="text-gray-500 text-sm mb-2">{genre}</p>
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-yellow-500 mr-1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 15.585l-4.146 2.146a1 1 0 01-1.32-.083l-.094-.104a1 1 0 01-.083-1.32l2.146-4.146a1 1 0 011.32-.083l.094.104.094-.104a1 1 0 01.083-1.32l-2.146-4.146a1 1 0 01.83-1.497l.165.001h4.293a1 1 0 01.975.757l1.317 5.268a1 1 0 01-.258.897l-3.585 3.585a1 1 0 01-.724.299 1 1 0 01-.697-.318zm-1.5-1.159a1 1 0 01.235-.974l3.585-3.585a1 1 0 01.158-1.269l-.094-.104-.094.104a1 1 0 01-.158 1.269L10.707 12H6.414l1.317-5.268a1 1 0 01.976-.757H11a1 1 0 01.697.318l3.585 3.585a1 1 0 01.258.897l-1.317 5.268a1 1 0 01-.975.757h-4.293a1 1 0 01-.165-.001l-.165-.024z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="text-gray-500 text-sm">{rating}</p>
                </div>
            </div>
        </div>

    );
};

export default GameCard;
