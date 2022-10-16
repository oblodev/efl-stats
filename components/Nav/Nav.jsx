import styles from "../../styles/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/efl_logo.svg";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
          <Link href="/">
            <h2>
              <span>EFL</span>Scores
            </h2>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link href="/standings">STANDINGS</Link>
            </li>
            <li>
              <Link href="/standings">MATCHES</Link>
            </li>
            <li>FIXTURES</li>
          </ul>
        </div>
        <div className={styles.eflLogo}>
          <Link
            href="https://europeanleague.football/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={logo} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
