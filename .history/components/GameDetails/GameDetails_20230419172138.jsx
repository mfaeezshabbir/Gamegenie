import React from 'react';
import styles from './GameDetails.module.css';

const GameDetails = ({ game }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={game.backgroundImage} alt={game.name} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{game.name}</h1>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <h2 className={styles.detailTitle}>Release Date:</h2>
                        <p className={styles.detailText}>{game.releaseDate}</p>
                    </div>
                    <div className={styles.detail}>
                        <h2 className={styles.detailTitle}>Platforms:</h2>
                        <div className={styles.detailText}>
                            {game.platformsName.map((platform, index) => (
                                <a key={platform} href={`/category/platform/${game.platformsSlug[index]}`}>
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <h2 className={styles.detailTitle}>Genres:</h2>
                        <div className={styles.detailText}>
                            {game.genresName.map((genre) => (
                                <a key={genre} href={`/category/genre/${genre}`}>
                                    {genre}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <h2 className={styles.detailTitle}>Rating:</h2>
                        <p className={styles.detailText}>{game.rating}</p>
                    </div>
                    <div className={styles.detail}>
                        <h2 className={styles.detailTitle}>Description:</h2>
                        <p className={styles.detailText}>{game.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
