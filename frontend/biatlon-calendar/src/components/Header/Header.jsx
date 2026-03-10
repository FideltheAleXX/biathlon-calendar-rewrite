import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <img
          className={styles.image}
          src="/src/assets/biathlon-logo.svg"
          alt="biathlon logo"
        />
      </div>

      <div
        className={`${styles.burger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        ☰
      </div>
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Main
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              News
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Tournament
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
