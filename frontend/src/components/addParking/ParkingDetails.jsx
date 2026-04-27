import styles from "../../styles/addParking/addparking.module.css";

function ParkingDetails({ data, updateField, nextStep, prevStep }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Parking Details</h2>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Total Slots</label>

            <input
              type="number"
              name="totalSlots"
              value={data.totalSlots}
              onChange={updateField}
              className={styles.input}
              placeholder="Enter total slots"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Price</label>

            <input
              type="number"
              name="price"
              value={data.price}
              onChange={updateField}
              className={styles.input}
              placeholder="enter price"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Opening Time</label>

            <input
              type="time"
              name="openingTime"
              value={data.openingTime}
              onChange={updateField}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Closing Time</label>

            <input
              type="time"
              name="closingTime"
              value={data.closingTime}
              onChange={updateField}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Parking Type</label>

          <select
            name="parkingType"
            value={data.parkingType}
            onChange={updateField}
            className={styles.select}
          >
            <option value="">Select Type</option>
            <option value="open">Open</option>
            <option value="covered">Covered</option>
            <option value="basement">Basement</option>
          </select>
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

export default ParkingDetails;
