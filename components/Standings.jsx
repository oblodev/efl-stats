import styles from "../styles/Standings.module.scss";
import Image from "next/image";
import { useState } from "react";

function Standings({ leagueStats }) {
  console.log(leagueStats);
  const [home, setHome] = useState(false);
  const [away, setAway] = useState(false);

  const leagueDataCentral = leagueStats.results.overall.tables[0].rows;
  const leagueDataSouth = leagueStats.results.overall.tables[1].rows;
  const leagueDataNorth = leagueStats.results.overall.tables[2].rows;

  const leagueDataCentralName = leagueStats.results.overall.tables[0].groupname;
  const leagueDataSouthName = leagueStats.results.overall.tables[1].groupname;
  const leagueDataNorthName = leagueStats.results.overall.tables[2].groupname;

  if (home) {
    const leagueDataCentral = leagueStats.results.home.tables[0].rows;
    const leagueDataSouth = leagueStats.results.home.tables[1].rows;
    const leagueDataNorth = leagueStats.results.home.tables[2].rows;
  } else if (away) {
    const leagueDataCentral = leagueStats.results.away.tables[0].rows;
    const leagueDataSouth = leagueStats.results.away.tables[1].rows;
    const leagueDataNorth = leagueStats.results.away.tables[2].rows;
  }

  console.log(home);

  return (
    <div className={styles.standingsContainer}>
      <div className={styles.standingsWrapper}>
        <h1>EFL Standings - SEASON 2022</h1>
        <div className={styles.standingsWrap}>
          <div className={styles.standingsTables}>
            <div className={styles.standingsTable}>
              <div className={styles.standingsHeader}>
                <h2>{leagueDataNorthName}</h2>
                <button className={styles.all}>All</button>
                <button className={styles.home} onClick={() => setHome(true)}>
                  Home
                </button>
                <button className={styles.away}>Away</button>
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
                  {leagueStats ? (
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
                <button className={styles.all}>All</button>
                <button className={styles.home}>Home</button>
                <button className={styles.away}>Away</button>
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
                  {leagueStats ? (
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
                <button className={styles.all}>All</button>
                <button className={styles.home}>Home</button>
                <button className={styles.away}>Away</button>
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
                  {leagueStats ? (
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

export default Standings;
