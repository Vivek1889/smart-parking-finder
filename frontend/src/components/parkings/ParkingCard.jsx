import styles from "../../styles/parkings/parkingcard.module.css";
import { LuCctv } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookingDetailsActions } from "../../store/bookingDetails";
function ParkingCard({ parking }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let handleSetDetails = () => {
    dispatch(bookingDetailsActions.addToDetails(parking));
    navigate("/bookingdetails");
  };
  return (
    <div className={styles.card} onClick={handleSetDetails}>
      <div className={styles.imageContainer}>
        <img src={parking.imageurl} alt="parking" />

        <span
          className={`${styles.status} ${
            parking.status === "active" ? styles.active : styles.inactive
          }`}
        >
          {parking.status}
        </span>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3>{parking.name}</h3>
        <p className={styles.address}>📍{parking.address}</p>
        <div className={styles.info}>
          <span>
            <FaCar></FaCar> {parking.availableslots}/{parking.totalslots}
          </span>
          <span>₹ {parking.price}/hr</span>
        </div>
        <div className={styles.features}>
          {!!parking.cctv && <LuCctv></LuCctv>}
          {!!parking.security && <MdOutlineSecurity />}
          {!!parking.charging && <GiElectric />}
        </div>
      </div>
    </div>
  );
}

export default ParkingCard;
