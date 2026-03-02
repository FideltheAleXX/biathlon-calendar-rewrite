import styles from './Races.module.css';
import { useEffect, useState } from 'react';

const Races = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    fetch('/data/calendar.json')
      .then((res) => res.json())
      .then((data) => setStages(data))
      .catch((err) => console.error('Ошибка загрузки:', err));
  }, []);

  return (
    <main className={styles.section}>
      <div className={styles.title}>Races</div>
      {stages.map((stage) => (
        <div key={stage.id}>
          <h3>{stage.name}</h3>
          <p>{stage.location}</p>
          <p>
            {stage.startDate} — {stage.endDate}
          </p>

          {stage.competitions.map((race) => (
            <div key={race.id}>
              <p>{new Date(race.date).toLocaleString()}</p>
              <p>
                {race.gender} {race.discipline} ({race.distance})
              </p>
              <p>Status: {race.status}</p>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Races;
