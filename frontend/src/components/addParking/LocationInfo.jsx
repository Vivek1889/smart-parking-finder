import styles from "../../styles/addParking/addparking.module.css";

function LocationInfo({ data, updateField, nextStep, prevStep }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Location</h2>

        <div className={styles.formGroup}>
          <label>Current Address</label>

          <input
            className={styles.input}
            name="address"
            value={data.address}
            onChange={updateField}
            placeholder="Enter address"
          />
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;
