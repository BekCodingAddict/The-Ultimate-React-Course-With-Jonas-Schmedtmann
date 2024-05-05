import styles from "./Home.module.css";
import GameArena from "./GameArena";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Memory Game</h1>
      <div className={styles.levelScore}>
        <div className={styles.level}>Level: </div>
        <div className={styles.score}>Score: </div>
      </div>
      <GameArena />
    </div>
  );
}

export default Home;
