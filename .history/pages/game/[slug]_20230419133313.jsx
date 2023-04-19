import { useRouter } from "next/router";
import { Header, GameDetails, Footer } from "../../components";

export default function GameDetailsPage({ game }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Header />
      <GameDetails game={game} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`http://localhost:3000/api/games/${slug}`);
  const game = await res.json();

  return {
    props: {
      game,
    },
  };
}
