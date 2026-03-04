import styles from './LeftSideBar.module.css';
import foto from '../../assets/fotogalery.jpg';
const LeftSideBar = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>ФОТОГРАФІЇ</div>
      <img src={foto} alt="biathlon-foto" />
      <div>Головна</div>
      <div>Обговорення</div>
      <div className={styles.tournament}>Tournament</div>
      <ul className={styles.list}>
        <li>Усе про біатлон</li>
        <li>Чат</li>
        <li>Блоги</li>
        <li>Інтервю</li>
        <li>Преса</li>
        <li>Голосування</li>
        <li>Трансляції на ТБ</li>
        <li>Сайти про біатлон</li>
        <li>Контакти</li>
      </ul>
      <div className={styles.name}>Кубок світу</div>
      <ul className={styles.list}>
        <li>Календар</li>
        <li>Кубок світу</li>
        <li>Кубок IBU</li>
        <li>Юніорський кубок IBU</li>
        <li>Результати</li>
        <li>Кубок націй</li>
        <li>Кубок націй IBU</li>
        <li>Статистика стрільби</li>
        <li>Швидкість спортсменів</li>
        <li>Біатлонна статистика</li>
      </ul>
      <div className={styles.name}>Наша команда</div>
      <ul className={styles.list}>
        <li>Наша збірна</li>
        <li>Автографкарти</li>
        <li>Фотогалереї збірної</li>
        <li>Особисті фотографії</li>
        <li>Чемпіонати України</li>
        <li>Спорт-школи України</li>
      </ul>
      <div className={styles.name}>Мультимедіа</div>
      <ul className={styles.list}>
        <li>Профайли</li>
        <li>Фотогалереї</li>
      </ul>
      <div className={styles.title}>ЗАРЕЄСТРУЙТЕСЬ</div>
      <ul className={styles.list}>
        <li>Реєстрація</li>
        <li>Вхід</li>
        <li>Мій профайл</li>
      </ul>
      <div className={styles.title}>НАСТУПНА ГОНКА</div>
      <div className={styles.nextRace}>Кубок світу, Контіолахті</div>
      <p>2026-03-05 17:05 (СЕТ)</p>
      <p>Індивідуальна гонка 15 км, Жінки</p>
    </section>
  );
};

export default LeftSideBar;
