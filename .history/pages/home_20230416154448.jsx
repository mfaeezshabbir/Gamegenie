import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/images/hero-image.jpg';
import gameImage1 from '../public/images/game-image-1.jpg';
import gameImage2 from '../public/images/game-image-2.jpg';
import gameImage3 from '../public/images/game-image-3.jpg';
import Layout from '@/components/layout';

const Home = () => {
    return (
        <Layout activePage={Home}>
            <div className="bg-gradient-to-b from-purple-700 to-indigo-900 text-white min-h-screen">
                <Head>
                    <title>GameGenie - Discover new games to play</title>
                    {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
                </Head>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Discover Your Next Favorite Game
                            </h1>
                            <p className="text-xl mb-8">
                                GameGenie helps you find new games to play based on your favorite
                                genres, platforms, and themes.
                            </p>
                            <button className="bg-white text-purple-700 py-2 px-4 rounded-lg font-medium hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
                                Get Started
                            </button>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src={heroImage}
                                alt="Hero image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="relative h-96">
                            <Image
                                src={gameImage1}
                                alt="Game image 1"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-purple-900 bg-opacity-75">
                                <p className="text-lg font-medium mb-1">First-Person Shooter</p>
                                <p className="text-sm">PC, Xbox, PlayStation</p>
                            </div>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src={gameImage2}
                                alt="Game image 2"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-purple-900 bg-opacity-75">
                                <p className="text-lg font-medium mb-1">Open-World Adventure</p>
                                <p className="text-sm">PC, PlayStation, Nintendo Switch</p>
                            </div>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src={gameImage3}
                                alt="Game image 3"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-purple-900 bg-opacity-75">
                                <p className="text-lg font-medium mb-1">Sports Simulation</p>
                                <p className="text-sm">PlayStation, Xbox</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        );
};

export default Home;
