import styles from "../styles/AwayStandings.module.scss";
import Image from "next/image";
import Link from "next/link";

function AwayStandings({ awayStats }) {
  console.log(awayStats);

  const leagueDataCentral = awayStats.results.away.tables[0].rows;
  const leagueDataSouth = awayStats.results.away.tables[1].rows;
  const leagueDataNorth = awayStats.results.away.tables[2].rows;

  const leagueDataCentralName = awayStats.results.away.tables[0].groupname;
  const leagueDataSouthName = awayStats.results.away.tables[1].groupname;
  const leagueDataNorthName = awayStats.results.away.tables[2].groupname;

  return (
    <div className={styles.standingsContainer}>
      <div className={styles.standingsWrapper}>
        <h1>EFL Standings - SEASON 2022 </h1>
        <h2>Away Standings</h2>
        <div className={styles.standingsWrap}>
          <div className={styles.standingsTables}>
            <div className={styles.standingsTable}>
              <div className={styles.standingsHeader}>
                <h2>{leagueDataNorthName}</h2>
                <Link href="/standings">
                  <button className={styles.all}>All</button>
                </Link>
                <Link href="/home">
                  <button className={styles.home}>Home</button>
                </Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <td className="pos">#</td>
                    <td className="team">Team</td>
                    <td>W</td>
                    <td>L</td>
                    <td>Pct.</td>
                    <td>GF</td>
                    <td>GA</td>
                  </tr>
                </thead>
                <tbody>
                  {awayStats ? (
                    leagueDataNorth.map((teamStat) => (
                      <tr key={teamStat.team.id}>
                        <td className="pos">{teamStat.pos}</td>
                        <td>
                          {teamStat.team.name}{" "}
                          <Image
                            src={`https://assets.b365api.com/images/team/b/${teamStat.team.image_id}.png`}
                            width="32px"
                            height="32px"
                          />
                        </td>
                        <td>{teamStat.win}</td>
                        <td>{teamStat.loss}</td>
                        <td>{(parseInt(teamStat.win) / 12).toFixed(3)}</td>
                        <td>{teamStat.goalsfor}</td>
                        <td>{teamStat.goalsagainst}</td>
                      </tr>
                    ))
                  ) : (
                    <div>None</div>
                  )}
                </tbody>
              </table>
            </div>
            <div className={styles.standingsTable}>
              <div className={styles.standingsHeader}>
                <h2>{leagueDataCentralName}</h2>
                <Link href="/standings">
                  <button className={styles.all}>All</button>
                </Link>
                <Link href="/home">
                  <button className={styles.home}>Home</button>
                </Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <td className="pos">#</td>
                    <td className="team">Team</td>
                    <td>W</td>
                    <td>L</td>
                    <td>Pct.</td>
                    <td>GF</td>
                    <td>GA</td>
                  </tr>
                </thead>
                <tbody>
                  {awayStats ? (
                    leagueDataCentral.map((teamStat) => (
                      <tr key={teamStat.team.id}>
                        <td className="pos">{teamStat.pos}</td>
                        <td>
                          {teamStat.team.name}{" "}
                          <Image
                            src={`https://assets.b365api.com/images/team/b/${teamStat.team.image_id}.png`}
                            width="32px"
                            height="32px"
                          />
                        </td>
                        <td>{teamStat.win}</td>
                        <td>{teamStat.loss}</td>
                        <td>{(parseInt(teamStat.win) / 12).toFixed(3)}</td>
                        <td>{teamStat.goalsfor}</td>
                        <td>{teamStat.goalsagainst}</td>
                      </tr>
                    ))
                  ) : (
                    <div>None</div>
                  )}
                </tbody>
              </table>
            </div>
            <div className={styles.standingsTable}>
              <div className={styles.standingsHeader}>
                <h2>{leagueDataSouthName}</h2>
                <Link href="/standings">
                  <button className={styles.all}>All</button>
                </Link>
                <Link href="/home">
                  <button className={styles.home}>Home</button>
                </Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <td className="pos">#</td>
                    <td className="team">Team</td>
                    <td>W</td>
                    <td>L</td>
                    <td>Pct.</td>
                    <td>GF</td>
                    <td>GA</td>
                  </tr>
                </thead>
                <tbody>
                  {awayStats ? (
                    leagueDataSouth.map((teamStat) => (
                      <tr key={teamStat.team.id}>
                        <td className="pos">{teamStat.pos}</td>
                        <td>
                          {teamStat.team.name}{" "}
                          <Image
                            src={`https://assets.b365api.com/images/team/b/${teamStat.team.image_id}.png`}
                            width="32px"
                            height="32px"
                          />
                        </td>
                        <td>{teamStat.win}</td>
                        <td>{teamStat.loss}</td>
                        <td>{(parseInt(teamStat.win) / 12).toFixed(3)}</td>
                        <td>{teamStat.goalsfor}</td>
                        <td>{teamStat.goalsagainst}</td>
                      </tr>
                    ))
                  ) : (
                    <div>None</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwayStandings;
