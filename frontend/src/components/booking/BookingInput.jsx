import styles from "../../styles/booking/bookinginput.module.css";

function BookingInput({ formData, handleChange }) {
  return (
    <div className={styles.card}>
      {/* Date */}
      <div className={styles.inputGroup}>
        <label>Date</label>
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      {/* Vehicle Number */}
      <div className={styles.inputGroup}>
        <label>Vehicle Number</label>
        <input
          type="text"
          name="vehicleno" // ✅ match parent state
          placeholder="UP14AB1234"
          value={formData.vehicleno}
          onChange={handleChange}
          required
        />
      </div>

      {/* Vehicle Type */}
      <div className={styles.inputGroup}>
        <label>Select Vehicle Type</label>

        <div className={styles.radioGroup}>
          <label className={styles.radioItem}>
            <input
              type="radio"
              name="vehicleType"
              value="bike"
              checked={formData.vehicleType === "bike"}
              onChange={handleChange}
            />
            <span>🏍 Bike</span>
          </label>

          <label className={styles.radioItem}>
            <input
              type="radio"
              name="vehicleType"
              value="car"
              checked={formData.vehicleType === "car"}
              onChange={handleChange}
            />
            <span>🚗 Car</span>
          </label>

          <label className={styles.radioItem}>
            <input
              type="radio"
              name="vehicleType"
              value="ev"
              checked={formData.vehicleType === "ev"}
              onChange={handleChange}
            />
            <span>⚡ EV</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default BookingInput;
