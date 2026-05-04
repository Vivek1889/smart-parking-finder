import styles from "../../styles/parkings/parkingcard.module.css";
import { LuCctv } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { FaPersonShelter } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { parkingDetailsActions } from "../../store/parkingDetails";

function ParkingCard({ data }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let handleSetDetails = () => {
    dispatch(parkingDetailsActions.addToDetails(data));
    navigate("/parkingdetails");
  };
  return (
    <div
      className={`${styles.card} ${data.status === "closed" && styles.inactive}`}
      onClick={() => {
        handleSetDetails();
      }}
    >
      <div className={styles.topSection}>
        <h4>{data.name}</h4>
        {data.status === "active" ? (
          <div className={styles.price}>Rs.{data.price}</div>
        ) : (
          <div className={styles.price}>Inactive</div>
        )}
      </div>

      <div className={styles.timeSection}>
        {/* Opening */}
        <div className={styles.timeBlock}>
          <span className={styles.time}>{data.openingtime}</span>
          <p>Opening Time</p>
        </div>

        {/* Line */}
        <div className={styles.lineWrapper}>
          <div className={styles.dot}></div>
          <div className={styles.line}></div>
          <div className={styles.dot}></div>
        </div>

        {/* Closing */}
        <div className={styles.timeBlock}>
          <span className={styles.time}>{data.closingtime}</span>
          <p>Closing Time</p>
        </div>
      </div>

      {/* Location */}
      <div className={styles.location}>
        <FaLocationArrow></FaLocationArrow>
        <span>{data.address}</span>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        {data.cctv == 1 && (
          <span className={styles.icon}>
            <LuCctv></LuCctv>
          </span>
        )}
        {data.security && (
          <span className={styles.icon}>
            <MdOutlineSecurity></MdOutlineSecurity>
          </span>
        )}

        {data.charging == 1 && (
          <span className={styles.icon}>
            <GiElectric></GiElectric>
          </span>
        )}
        {data.covered == 1 && (
          <span className={styles.icon}>
            <FaPersonShelter></FaPersonShelter>
          </span>
        )}
      </div>
    </div>
  );
}

export default ParkingCard;
