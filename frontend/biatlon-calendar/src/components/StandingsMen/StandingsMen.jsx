import styles from './StandingsMen.module.css';
const StandingsMen = () => {
  const athletes = [
    { id: 1, name: 'Eric Perrot', points: 834 },
    { id: 2, name: 'Tommaso Giacomel', points: 797 },
    { id: 3, name: 'Sebastian Samuelsson', points: 668 },
    { id: 4, name: 'Johan-Olav Smoerdal Botn', points: 630 },
    { id: 5, name: 'Quentin Fillon Maillet', points: 503 },
    { id: 6, name: 'Johannes Dale-Skjevdal', points: 501 },
    { id: 7, name: 'Martin Ponsiluoma', points: 500 },
    { id: 8, name: 'Emilien Jacquelin', points: 474 },
    { id: 9, name: 'Vetle Sjaastad Christiansen', points: 429 },
    { id: 10, name: 'Campbell Wright', points: 414 },
  ];

  const getPositionClass = (index) => {
    if (index === 0) return styles.position1;
    if (index === 1) return styles.position2;
    if (index === 2) return styles.position3;
    return '';
  };

  return (
    <>
      <section className={styles.section}>
        <p className={styles.title}>Men`s Score</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Athlete</th>
              <th className={styles.points}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {athletes.map((athlete, index) => (
              <tr key={athlete.id}>
                <td className={`${styles.position} ${getPositionClass(index)}`}>
                  {index + 1}
                </td>
                <td>{athlete.name}</td>
                <td className="points">{athlete.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default StandingsMen;
