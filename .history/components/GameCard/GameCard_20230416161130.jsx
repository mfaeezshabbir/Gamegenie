import Image from "next/image";

const GameCard = ({ title, imageSrc, platform, genre, rating, description }) => {
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
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="230px" height="230px" viewBox="-6.4 -6.4 76.80 76.80" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <path fill="#f5ee19" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"></path> </g></svg>
                    <p className="text-gray-500 text-sm">{rating}</p>
                </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div class="relative">
                    <img src={imageSrc} alt={title} class="object-cover w-full h-48 md:h-56" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div class="absolute bottom-0 right-0 m-4">
                        <span class="inline-block bg-red-600 text-white px-2 py-1 rounded-full text-sm uppercase tracking-wider font-semibold shadow-md">New</span>
                    </div>
                </div>
                <div class="p-4 md:p-6">
                    <h3 class="text-lg md:text-xl font-bold mb-2"><a href="#">{title}</a></h3>
                    <p class="text-sm md:text-base text-gray-700 mb-2">{description}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 0l2.477 6.387L19.142 7.35l-4.326 3.836.934 6.134L10 16.25l-4.75 2.069.934-6.134L.858 7.35l6.665-.963L10 0zm.927 9.211L8.184 8.058l-.868-.434-1.281 1.033L5.39 9.623l.645-1.472-.947-.98 1.543-.13L7.06 6.04l.527 1.507 1.34.178-.947.98.645 1.472 1.033-1.033zm-.927 1.713l-.785-.785-.785.785-.448-1.162-.961-.661 1.162-.178.448-1.107.448 1.107 1.162.178-.961.661-.448 1.162z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-gray-700 font-semibold">{rating}</span>
                        </div>
                        <span class="text-sm text-gray-500">Platforms: PC, Xbox, PlayStation</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GameCard;
