import styles from './StandingsWomen.module.css';

const StandingsWomen = () => {
  const athletes = [
    { id: 1, name: 'Lou Jeanmonnot', points: 848 },
    { id: 2, name: 'Suvi Minkkinen', points: 646 },
    { id: 3, name: 'Anna Magnusson', points: 585 },
    { id: 4, name: 'Maren Kirkeeide', points: 576 },
    { id: 5, name: 'Hanna Oeberg', points: 560 },
    { id: 6, name: 'Elvira Oeberg', points: 506 },
    { id: 7, name: 'Lisa Vittozzi', points: 494 },
    { id: 8, name: 'Camille Bened', points: 491 },
    { id: 9, name: 'Justine Braisaz-Bouchet', points: 478 },
    { id: 10, name: 'Dorothea Wierer', points: 456 },
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
        <p className={styles.title}>Women`s Score</p>
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

export default StandingsWomen;

// import LeadersTable from "./LeadersTable";

// const maleLeaders = [
//   { id: 1, name: "Johannes Boe", points: 1024 },
//   { id: 2, name: "Sturla Laegreid", points: 978 },
//   // ...
// ];

// const femaleLeaders = [
//   { id: 1, name: "Tiril Eckhoff", points: 910 },
//   { id: 2, name: "Marketa Davidova", points: 880 },
//   // ...
// ];

// export default function LeadersSection() {
//   return (
//     <div>
//       <LeadersTable title="Top 10 Men" leaders={maleLeaders} />
//       <LeadersTable title="Top 10 Women" leaders={femaleLeaders} />
//     </div>
//   );
// }
// import styles from "./Leaders.module.css";

// export default function LeadersTable({ title, leaders }) {
//   const getPositionClass = (index) => {
//     if (index === 0) return styles.position1;
//     if (index === 1) return styles.position2;
//     if (index === 2) return styles.position3;
//     return "";
//   };

//   return (
//     <div className={styles.leadersCard}>
//       <h3 className={styles.leadersTitle}>{title}</h3>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th className={styles.positionHeader}>#</th>
//             <th>Athlete</th>
//             <th className={styles.points}>Pts</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaders.map((athlete, index) => (
//             <tr key={athlete.id} className={getPositionClass(index)}>
//               <td className={styles.position}>{index + 1}</td>
//               <td>{athlete.name}</td>
//               <td className={styles.points}>{athlete.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
