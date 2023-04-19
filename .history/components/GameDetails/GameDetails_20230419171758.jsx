import React from 'react';

function GameDetail({ game }) {
  const {
    name,
    releaseDate,
    backgroundImage,
    rating,
    platformsName,
    genresName,
    description,
  } = game;

  return (
    <div>
      <h1>{name}</h1>
      <p>{releaseDate}</p>
      <img src={backgroundImage} alt={name} />
      <p>Rating: {rating}</p>
      <p>Platforms: {platformsName.join(', ')}</p>
      <p>Genres: {genresName.join(', ')}</p>
      <p>{description}</p>
    </div>
  );
}

export default GameDetail;
