import { useRouter } from 'next/router';
import GameCard from '../../components/GameCard';
import { getGamesByCategory } from '../api';

export default function Category({ games }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game) => (
                <GameCard key={game.slug} game={game} />
            ))}
        </div>
    );
}

export async function getStaticPaths() {
    // Fetch all genres and platforms from API
    const genres = await fetchGenres();
    const platforms = await fetchPlatforms();

    // Combine all genres and platforms into one array
    const categories = [...genres, ...platforms];

    // Map each category to a params object with the slug
    const paths = categories.map((category) => ({
        params: { slug: category.slug },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Fetch games for the category with the given slug
    const games = await getGamesByCategory(params.slug);

    return {
        props: { games },
        revalidate: 1,
    };
}
