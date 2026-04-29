import { GiShoppingCart } from "react-icons/gi";
import styles from "../../styles/booking/nobooking.module.css";
import { Link } from "react-router-dom";
function NoBooking({ onExplore }) {
  return (
    <div className={styles.container}>
      <GiShoppingCart className={styles.cart}></GiShoppingCart>
      <h2>No Bookings Yet</h2>
      <p>
        You haven’t added any parking bookings to your cart. Start exploring and
        reserve your spot now.
      </p>

      {/* CTA */}
      <Link to="/parkings">
        <button onClick={onExplore} className={styles.button}>
          Explore Parking
        </button>
      </Link>
    </div>
  );
}
export default NoBooking;
