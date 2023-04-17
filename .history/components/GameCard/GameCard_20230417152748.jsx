import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

import styles from './GameCard.module.css';

function GameCard({ game }) {
    const {
        id,
        name,
        released,
        backgroundImage,
        rating,
        platforms,
        genres,
        description,
    } = game;

    return (
        <div className={styles.gameCard}>
            <div className={styles.gameImage}>
                <Image
                    src={backgroundImage}
                    alt={`${name} background`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.gameDetails}>
                <h2 className={styles.gameTitle}>
                    <Link href={`/game/${id}`}>
                        <a>{name}</a>
                    </Link>
                </h2>
                <p className={styles.gameRelease}>
                    Released:{' '}
                    {released ? format(new Date(released), 'MMM dd, yyyy') : 'Unknown'}
                </p>
                <p className={styles.gameRating}>Rating: {rating.toFixed(1)}</p>
                <div className={styles.gamePlatforms}>
                    Platforms:{' '}
                    {platforms.map((platform) => platform.platform.name).join(', ')}
                </div>
                <div className={styles.gameGenres}>
                    Genres:{' '}
                    {genres.map((genre) => genre.name).join(', ')}
                </div>
                <div className={styles.gameDescription}>{description}</div>
            </div>
        </div>
    );
}

export default GameCard;
