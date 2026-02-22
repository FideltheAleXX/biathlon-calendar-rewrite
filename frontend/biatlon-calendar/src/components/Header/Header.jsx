import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.navigation}>
      <div>
        <img
          className={styles.image}
          src="/src/assets/biathlon-logo(2).svg"
          alt="biathlon logo"
        />
      </div>
      <nav>
        <ul className={styles.list}>
          <li>Main</li>
          <li>Team</li>
          <li>News</li>
          <li>Tournament</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
