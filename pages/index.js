import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Standings from "../components/Standings";
export default function Home() {
  return (
    <div>
      <Head>
        <title>EFL-European League of Football - Stats</title>
        <meta
          name="description"
          content="EFL-European League of Football - Stats Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
