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
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div class="relative">
                    <img src={img} alt="Game Cover" class="object-cover w-full h-48 md:h-56" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div class="absolute bottom-0 right-0 m-4">
                        <span class="inline-block bg-red-600 text-white px-2 py-1 rounded-full text-sm uppercase tracking-wider font-semibold shadow-md">New</span>
                    </div>
                </div>
                <div class="p-4 md:p-6">
                    <h3 class="text-lg md:text-xl font-bold mb-2"><a href="#">Game Title Goes Here</a></h3>
                    <p class="text-sm md:text-base text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 0l2.477 6.387L19.142 7.35l-4.326 3.836.934 6.134L10 16.25l-4.75 2.069.934-6.134L.858 7.35l6.665-.963L10 0zm.927 9.211L8.184 8.058l-.868-.434-1.281 1.033L5.39 9.623l.645-1.472-.947-.98 1.543-.13L7.06 6.04l.527 1.507 1.34.178-.947.98.645 1.472 1.033-1.033zm-.927 1.713l-.785-.785-.785.785-.448-1.162-.961-.661 1.162-.178.448-1.107.448 1.107 1.162.178-.961.661-.448 1.162z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-gray-700 font-semibold">8.6</span>
                        </div>
                        <span class="text-sm text-gray-500">Platforms: PC, Xbox, PlayStation</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GameCard;
