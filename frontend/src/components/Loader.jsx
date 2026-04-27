import styles from "../styles/loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderBox}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>

      <p className={styles.loadingText}>Fetching...</p>
    </div>
  );
}

export default Loader;
