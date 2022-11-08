import styles from "../styles/homeGames.module.scss";
import HomeStandings from "../components/HomeStandings";

function home({ homeStats }) {
  return (
    <>
      <HomeStandings homeStats={homeStats} />
    </>
  );
}

export default home;

export async function getStaticProps() {
  const res = await fetch(
    "https://api.b365api.com/v2/league/table?token=128681-REs6hF7cmFyd3L&league_id=29917"
  );

  const stats = await res.json();

  return {
    props: {
      homeStats: stats,
    },
  };
}
