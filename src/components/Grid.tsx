import TableBody from "./TableBody";
import styles from "./styles.module.css";

const Grid = () => {
  return (
    <table className={styles["departure-table"]}>
      <thead>
        <tr>
          <th className={styles.time}>TIME</th>
          <th className={styles.destination}>DESTINATION</th>
          <th className={styles.flight}>FLIGHT</th>
          <th className={styles.gate}>GATE</th>
          <th className={styles.remarks}>REMARKS</th>
        </tr>
      </thead>
      <TableBody />
    </table>
  );
};

export default Grid;
