import styles from './StandingsMen.module.css';
const StandingsMen = () => {
  const athletes = [
    { id: 1, name: 'Eric Perrot', points: 999 },
    { id: 2, name: 'Tommaso Giacomel', points: 797 },
    { id: 3, name: 'Sebastian Samuelsson', points: 723 },
    { id: 4, name: 'Johan-Olav Smoerdal Botn', points: 707 },
    { id: 5, name: 'Sturla Holm Laegreid', points: 569 },
    { id: 6, name: 'Johannes Dale-Skjevdal', points: 563 },
    { id: 7, name: 'Vetle Sjaastad Vhristiansen', points: 559 },
    { id: 8, name: 'Martin Ponsiluoma', points: 550 },
    { id: 9, name: 'Quentin Fillon Maillet', points: 540 },
    { id: 10, name: 'Emilien Jacquelin', points: 536 },
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
