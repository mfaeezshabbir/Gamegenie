import Footer from "@/components/Footer/Footer";
import GameDetails from "@/components/GameDetails/GameDetails";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
// import { Header, GameDetails, Footer } from "../../components";

export default function GameDetailsPage({ game }) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            {/* <Header /> */}
            <GameDetails game={game} />
            {/* <Footer /> */}
        </>
    );
}

export async function getServerSideProps(context) {
    const rawgKey = process.env.RAWG_API_KEY;

    const { slug } = context.query;
    const res = await fetch(`https://api.rawg.io/api/games?key=${rawgKey}/${slug}`);
    const game = await res.json();

    return {
       console.log( props: {
            game,
        },))
    };
}
