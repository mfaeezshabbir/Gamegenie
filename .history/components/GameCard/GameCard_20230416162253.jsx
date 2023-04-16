import Image from "next/image";

const GameCard = ({ title, imageSrc, platform, genre, rating, description }) => {
    return (
        <div className="border-2 border-gray-800 rounded-md overflow-hidden shadow-md">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div class="relative">
                    <Image src={imageSrc} alt={title} class="object-cover w-full h-48 md:h-56" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div class="absolute bottom-0 right-0 m-4">
                        <span class="inline-block bg-red-600 text-white px-2 py-1 rounded-full text-sm uppercase tracking-wider font-semibold shadow-md">New</span>
                    </div>
                </div>
                <div class="p-4 md:p-6">
                    <p class="text-sm md:text-base text-gray-100 mb-2 bg-slate-600 w-fit p-1 rounded-md ">{genre}</p>
                    <h3 class="text-lg md:text-xl font-bold mb-2"><a href="#">{title}</a></h3>
                    <p class="text-sm md:text-base text-gray-700 mb-2">{description}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class="h-6 w-6 mr-1" viewBox="-6.4 -6.4 76.80 76.80" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.128"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="rgb(234 179 8)" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                                </g>
                            </svg>
                            <span class="text-gray-700 font-semibold">{rating}</span>
                        </div>
                        <span class="text-sm text-gray-500">Platforms: {platform}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GameCard;
