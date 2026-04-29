import styles from "../../styles/addParking/addparking.module.css";
import {
  FaMapMarkerAlt,
  FaParking,
  FaRupeeSign,
  FaCheckCircle,
  FaWarehouse,
} from "react-icons/fa";

function ReviewSubmit({ data, prevStep, handleSubmit }) {
  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.reviewCard}>
        <div className={styles.header}>
          <div className={styles.topIcon}>
            <FaCheckCircle />
          </div>

          <h2>Review & Submit</h2>
          <p>Check your parking details before submission</p>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <FaWarehouse className={styles.icon} />
            <div>
              <span>Parking Name</span>
              <h4>{data.parkingname}</h4>
            </div>
          </div>

          <div className={styles.detailCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <span>Address</span>
              <h4>{data.address}</h4>
            </div>
          </div>

          <div className={styles.detailCard}>
            <FaParking className={styles.icon} />
            <div>
              <span>Total Slots</span>
              <h4>{data.totalslots}</h4>
            </div>
          </div>

          <div className={styles.detailCard}>
            <FaRupeeSign className={styles.icon} />
            <div>
              <span>Price / Hour</span>
              <h4>₹{data.price}</h4>
            </div>
          </div>
        </div>

        <div className={styles.typeBox}>
          <p>Parking Type</p>
          <span className={styles.badge}>{data.parkingtype} </span>
        </div>

        <div className={styles.buttonGroup}>
          <button
            onClick={prevStep}
            className={`${styles.button} ${styles.secondary}`}
          >
            Back
          </button>

          <button
            onClick={handleSubmit}
            className={`${styles.button} ${styles.primary}`}
          >
            Register Parking
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewSubmit;
