import styles from './RightSideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSquareFacebook,
  faTelegram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const RightSideBar = () => {
  const totalVotes = 186;

  const options = [
    { name: 'у топ-10 (7-10 місце)', votes: 62 },
    { name: 'у топ-15 (11-15 місце)', votes: 49 },
    { name: "у 'квітковій церемонії' (4-6 місце)", votes: 33 },
    { name: 'у топ-20 (16-20 місце)', votes: 27 },
    { name: 'у топ-20 (16-20 місце)', votes: 15 },
  ];
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            style={{ color: 'rgb(177, 151, 252)', fontSize: '2rem' }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: 'rgb(20, 19, 18)', fontSize: '2rem' }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: 'rgb(235, 87, 11)', fontSize: '2rem' }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: 'rgb(116, 192, 252)', fontSize: '2rem' }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faTelegram}
            style={{ color: 'rgb(116, 192, 252)', fontSize: '2rem' }}
          />
        </li>
      </ul>
      <div className={styles.title}>ОЦІНКИ</div>
      <div>Оцінки в останній гонці</div>
      <button>Поставити / подивитись оцінки</button>
      <div className={styles.title}>ГОЛОСУВАННЯ</div>
      <div>Які місця стануть найкращими для наших біатлоністів на ОІ?</div>
      {options.map((opt, index) => {
        const percent = ((opt.votes / totalVotes) * 100).toFixed(1);

        return (
          <div key={index} className={styles.pollOption}>
            <span>{opt.name}</span>

            <div className={styles.pollBar}>
              <div
                className={styles.pollFill}
                style={{ width: `${(opt.votes / totalVotes) * 100}%` }}
              />
            </div>

            <span>{opt.votes}</span>
          </div>
        );
      })}
      <button>Проголосувати</button>
      <div className={styles.title}>ПРОФАЙЛИ</div>
      <ul>
        <li>Юлія Джима</li>
        <li>Дмитро Підручний</li>
        <li>Стурла Легрейд</li>
        <li>Богдан Борковський</li>
        <li>Себастьян Самуельссон</li>
        <li>Кантен Фійон-Майє</li>
        <li>Олена Городна</li>
        <li>Яков Фак</li>
        <li>Дарина Чалик</li>
        <li>Уле-Айнар Бйордален</li>
        <li>Віталій Мандзин</li>
        <li>Христина Дмитренко</li>
        <li>Анастасія Меркушина</li>
        <li>Анна Кривонос</li>
        <li>Антон Дудченко</li>
      </ul>
      <div className={styles.title}>ІНТЕРВЮ</div>
      <div>2026-02-20</div>
      <p>Дмитро Підручний: Завжди хочеться вище</p>

      <div>2026-02-20</div>
      <p>
        Віталій Мандзин: Радий, що зумів на такій ноті завершити цю Олімпіаду
      </p>

      <div>2026-02-18</div>
      <p>Дарина Чалик: Дуже задоволена, що сьогодні стартувала</p>

      <div>2026-02-18</div>
      <p>Олександра Меркушина: Я насолодилась сьогоднішньою гонкою</p>

      <div>2026-02-17</div>
      <p>
        Віталій Мандзин: Я задоволений своїм виступом, але хочеться завжди краще
      </p>

      <div>2026-02-17</div>
      <p>Богдан Борковський: Є надія, що я буду прогресувати</p>
    </section>
  );
};

export default RightSideBar;
