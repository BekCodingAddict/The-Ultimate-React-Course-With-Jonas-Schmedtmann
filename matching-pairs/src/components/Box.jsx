import styles from "./Box.module.css";

function Box({ emoji }) {
  return (
    <div className={styles.container}>
      <span>{emoji}</span>
    </div>
  );
}

export default Box;
