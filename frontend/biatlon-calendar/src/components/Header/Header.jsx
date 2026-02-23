import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <img
          className={styles.image}
          src="/src/assets/biathlon-logo.svg"
          alt="biathlon logo"
        />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="#">
              Main
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="#">
              Team
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="#">
              News
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="#">
              Tournament
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="#">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
