import styles from "../../styles/addParking/addparking.module.css";
import { LuCctv } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { FaPersonShelter } from "react-icons/fa6";
function FeaturesInfo({ data, updateField, nextStep, prevStep }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Features</h2>

        <div className={styles.featureGrid}>
          <label className={styles.featureBox}>
            <input
              type="checkbox"
              name="cctv"
              checked={data.cctv}
              onChange={updateField}
            />
            <LuCctv></LuCctv>
            CCTV
          </label>

          <label className={styles.featureBox}>
            <input
              type="checkbox"
              name="security"
              checked={data.security}
              onChange={updateField}
            />
            <MdOutlineSecurity></MdOutlineSecurity>
            Security
          </label>

          <label className={styles.featureBox}>
            <input
              type="checkbox"
              name="ev"
              checked={data.charging}
              onChange={updateField}
            />
            <GiElectric></GiElectric>
            EV Charging
          </label>

          <label className={styles.featureBox}>
            <input
              type="checkbox"
              name="covered"
              checked={data.covered}
              onChange={updateField}
            />
            <FaPersonShelter></FaPersonShelter>
            Covered
          </label>
        </div>

        <div className={styles.buttonGroup}>
          <button
            onClick={prevStep}
            className={`${styles.button} ${styles.secondary}`}
          >
            Back
          </button>

          <button
            onClick={nextStep}
            className={`${styles.button} ${styles.primary}`}
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesInfo;
