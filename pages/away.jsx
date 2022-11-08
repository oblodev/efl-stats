import styles from "../styles/awayGames.module.scss";
import AwayStandings from "../components/AwayStandings";

function away({ awayStats }) {
  return (
    <>
      <AwayStandings awayStats={awayStats} />
    </>
  );
}

export default away;

export async function getStaticProps() {
  const res = await fetch(
    "https://api.b365api.com/v2/league/table?token=128681-REs6hF7cmFyd3L&league_id=29917"
  );

  const stats = await res.json();

  return {
    props: {
      awayStats: stats,
    },
  };
}
