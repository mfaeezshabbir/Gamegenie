import React from 'react';
import Head from 'next/head';

function Home() {
  return (
    <>
    <div className="bg-gradient-to-b from-gray-200 to-white">
      <Head>
        <title>GameGenie - Discover new games to play</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 mt-8 mb-4">
          Welcome to GameGenie!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover new games to play based on your preferences.
        </p>
        {/* Add links to browse, search, and filter games */}
      </div>
    </div>
    </>
  );
}

export default Home;
