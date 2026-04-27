import styles from "../../styles/addParking/addparking.module.css";

function BasicInfo({ data, updateField, nextStep }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Basic Information</h2>

        <div className={styles.formGroup}>
          <label>Parking Name</label>
          <input
            className={styles.input}
            name="parkingName"
            value={data.parkingName}
            onChange={updateField}
            placeholder="Enter parking name"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input
            className={styles.input}
            name="imageUrl"
            value={data.imageUrl}
            onChange={updateField}
            placeholder="Enter image url"
          />
        </div>

        <div className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${styles.primary}`}
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
