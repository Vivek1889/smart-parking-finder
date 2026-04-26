import styles from "../../styles/home/featurecard.module.css";

function FeatureCard({ feature }) {
  return (
    <div className={styles.featureCard}>
      <span>{feature.logo}</span>
      <div className={styles.description}>
        <h2>{feature.heading}</h2>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}
export default FeatureCard;
