import styles from "../../styles/dashboard/card.module.css";

function Card({ title, value }) {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}
export default Card;
