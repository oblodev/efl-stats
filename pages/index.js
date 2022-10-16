import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Standings from "../components/Standings";
import styles from "../styles/Home.module.css";

export default function Home({ leagueStats }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>EFL-European League of Football - Stats</title>
        <meta
          name="description"
          content="EFL-European League of Football - Stats Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Standings leagueStats={leagueStats} />
    </div>
  );
}

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
