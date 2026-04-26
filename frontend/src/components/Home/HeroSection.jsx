import styles from "../../styles/home/herosection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.infoSection}>
        <h1>Travel anywhere but don't worry about Your parking.</h1>
      </div>
      <div className={styles.imageSection}>
        <img
          src="https://cdn.blablacar.com/k/a/images/hero-5_893w-619f71bcbb60e193.webp"
          alt=""
          width="100%"
        />
      </div>
    </div>
  );
}
export default HeroSection;
