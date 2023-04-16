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
                    <svg viewBox="0 0 48 48" enable-background="new 0 0 48 48" id="_x3C_Layer_x3E_" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="star_x2C__favorit"> <path d="M23.283,38.607l-10.879,5.709c-1.151,0.602-2.475-0.363-2.262-1.636l2.076-12.097 c0.084-0.502-0.082-1.022-0.44-1.379l-8.81-8.562c-0.918-0.9-0.41-2.468,0.854-2.65l12.164-1.768 c0.516-0.066,0.957-0.386,1.174-0.842l5.451-11.018c0.556-1.153,2.222-1.153,2.777,0l5.451,11.018 c0.217,0.456,0.658,0.775,1.174,0.842l12.164,1.768c1.264,0.183,1.771,1.75,0.854,2.65l-8.81,8.562 c-0.358,0.357-0.524,0.877-0.44,1.379l2.076,12.097c0.213,1.273-1.11,2.238-2.262,1.636l-10.879-5.709 C24.26,38.367,23.74,38.367,23.283,38.607z" fill="#f9cf24" id="XMLID_2_"></path> <path d="M36.328,44.998c-0.328,0-0.658-0.079-0.964-0.238l-10.88-5.71c-0.313-0.164-0.656-0.164-0.969,0 l-10.879,5.709c-0.703,0.367-1.532,0.308-2.168-0.153c-0.636-0.461-0.949-1.23-0.819-2.009l2.076-12.099 c0.057-0.338-0.058-0.699-0.3-0.94L2.62,21.001c-0.564-0.553-0.762-1.363-0.516-2.114c0.243-0.746,0.874-1.278,1.646-1.39 l12.163-1.768c0.354-0.046,0.648-0.255,0.795-0.562l5.454-11.024C22.502,3.44,23.207,3,24,3s1.498,0.44,1.839,1.147l5.275,10.662 c0.122,0.248,0.021,0.547-0.227,0.67c-0.246,0.121-0.548,0.022-0.67-0.227L24.94,4.586c-0.355-0.737-1.527-0.733-1.879-0.004 l-5.453,11.022c-0.289,0.608-0.873,1.028-1.559,1.116L3.895,18.487c-0.399,0.058-0.713,0.324-0.84,0.711 c-0.129,0.393-0.03,0.8,0.264,1.088l8.809,8.56c0.479,0.477,0.696,1.156,0.585,1.82l-2.076,12.099 c-0.068,0.405,0.089,0.792,0.42,1.032c0.331,0.242,0.749,0.269,1.117,0.076l10.878-5.709c0.604-0.316,1.295-0.316,1.898,0 l10.879,5.709c0.367,0.193,0.786,0.164,1.116-0.077c0.331-0.24,0.488-0.627,0.42-1.034l-2.076-12.095 c-0.111-0.666,0.106-1.345,0.581-1.818l8.813-8.565c0.293-0.287,0.392-0.693,0.263-1.086c-0.127-0.387-0.44-0.653-0.839-0.711 l-11.612-1.688c-0.272-0.04-0.462-0.293-0.423-0.566c0.04-0.274,0.295-0.47,0.567-0.423l11.611,1.688 c0.771,0.111,1.402,0.644,1.646,1.39c0.246,0.751,0.049,1.561-0.515,2.112l-8.811,8.563c-0.238,0.237-0.353,0.598-0.296,0.938 l2.076,12.095c0.13,0.78-0.184,1.55-0.819,2.011C37.173,44.866,36.753,44.998,36.328,44.998z" fill="#7e22ce "></path> <path d="M11.129,43.349c-0.028,0-0.057-0.002-0.086-0.007c-0.271-0.046-0.454-0.305-0.408-0.577l2.077-12.101 c0.111-0.662-0.109-1.344-0.589-1.823L3.32,20.287c-0.295-0.289-0.394-0.695-0.267-1.087c0.129-0.39,0.442-0.655,0.841-0.713 l12.147-1.766c0.693-0.089,1.274-0.504,1.563-1.11l5.458-11.034c0.123-0.249,0.425-0.348,0.67-0.227 c0.247,0.123,0.349,0.422,0.227,0.67l-5.455,11.027c-0.432,0.908-1.303,1.533-2.327,1.665l-12.14,1.765l8.786,8.652 c0.713,0.711,1.038,1.719,0.874,2.702l-2.077,12.103C11.579,43.177,11.367,43.349,11.129,43.349z" fill="#FFF8E1"></path> </g> </g></svg>
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
