import Standings from "../components/Standings";

function standings({ leagueStats }) {
  return (
    <>
      <Standings leagueStats={leagueStats} />
    </>
  );
}

export default standings;

export async function getStaticProps() {
  const res = await fetch(
    "https://api.b365api.com/v2/league/table?token=128681-REs6hF7cmFyd3L&league_id=29917"
  );

  const stats = await res.json();

  return {
    props: {
      leagueStats: stats,
    },
  };
}
