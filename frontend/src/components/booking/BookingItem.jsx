import styles from "../../styles/booking/bookingitem.module.css";
import ParkingMap from "./ParkingMap";

function BookingItem({ data }) {
  return (
    <div className={styles.card}>
      <span
        className={`${styles.status} ${data.status === "active" ? styles.active : styles.inactive}`}
      >
        {data.status}
      </span>
      <div className={styles.imageContainer}>
        <ParkingMap data={data}></ParkingMap>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3>{data.name}</h3>
        <p className={styles.location}>📍 {data.address}</p>

        {/* Slots */}
        <div className={styles.slots}>
          <span>Available: {data.availableslots}</span>
          <span>Total: {data.totalslots}</span>
        </div>
        <hr />
        {/* Price */}
        <div className={styles.price}>₹{data.price}/day</div>
        <br />
        {/* Features */}
        <div className={styles.features}>
          {!!data.cctv && <span>📷 CCTV</span>}
          {!!data.security && <span>🛡 Security</span>}
          {!!data.charging && <span>⚡ EV</span>}
          {!!data.covered && <span>🏠 Covered</span>}
        </div>
      </div>
    </div>
  );
}

export default BookingItem;
