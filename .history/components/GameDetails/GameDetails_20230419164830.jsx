import Image from "next/image";
import styles from "./GameDetails.module.css";

const GameDetails = ({ game }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={game.backgroundImage}
          alt={game.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{game.name}</h1>
        <p className={styles.releaseDate}>
          Release Date: {game.releaseDate}
        </p>
        <p className={styles.platforms}>
          Platforms: {game.platformsName.join(", ")}
        </p>
        <p className={styles.genres}>Genres: {game.genresName.join(", ")}</p>
        <p className={styles.rating}>Rating: {game.rating}</p>
        <p className={styles.description}>{game.description}</p>
      </div>
    </div>
  );
};

export default GameDetails;
