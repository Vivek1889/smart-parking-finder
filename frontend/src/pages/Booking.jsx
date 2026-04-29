import styles from "../styles/booking/booking.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { LuCctv } from "react-icons/lu";
import { GiElectric } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { bookingActions } from "../store/bookingSlice";
import API from "../services/api";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import PathMap from "../components/booking/PathMap";
import NoBooking from "../components/booking/NoBooking";
import { useNavigate } from "react-router-dom";
function Booking() {
  let navigate = useNavigate();
  let [showPopup, setShowPopup] = useState(false);
  const booking = useSelector((store) => store.bookingSlice || null);
  const user = useSelector((store) => store.user);
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [user]);
  let dispatch = useDispatch();
  console.log(booking);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/getbookings");
        dispatch(bookingActions.setBookingSlice(res.data.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, [dispatch]);

  if (!booking) {
    return <NoBooking onExplore={() => navigate("/")}></NoBooking>;
  }

  const handleCancel = async () => {
    try {
      await API.delete("/cancelbookings", {
        data: {
          bookingid: booking.bookingid,
          parkingid: booking.parkingid,
        },
      });
      setShowPopup(true);
      setTimeout(() => {
        dispatch(bookingActions.setBookingSlice(null));
        setShowPopup(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.card}>
      {showPopup && (
        <Popup
          message={"Booking Cancelled"}
          setShowPopup={setShowPopup}
        ></Popup>
      )}
      <div className={styles.mapContainer}>
        <PathMap booking={booking}></PathMap>
      </div>

      <div className={styles.informationContainor}>
        <div className={styles.header}>
          <h2 className={styles.title}>{booking?.name}</h2>

          <span
            className={`${styles.status} ${
              booking?.status === "active"
                ? styles.active
                : booking?.status === "completed"
                  ? styles.completed
                  : styles.cancelled
            }`}
          >
            {booking?.status}
          </span>
        </div>

        <div className={styles.location}>
          <FaMapMarkerAlt />
          <span>{booking?.address}</span>
        </div>

        <div className={styles.price}>₹{booking?.price}/hr</div>

        <div className={styles.features}>
          {booking?.cctv && <LuCctv />}
          {booking?.security && <MdSecurity />}
          {booking?.ev && <GiElectric />}
        </div>

        <div className={styles.vehicle}>
          <p>
            <strong>Vehicle No:</strong> {booking?.vehicleno}
          </p>
          <p>
            <strong>Type:</strong> {booking?.vehicletype}
          </p>
        </div>

        <hr />

        <div className={styles.date}>
          {booking?.date && new Date(booking.date).toLocaleString()}
        </div>

        {booking?.status === "booked" && (
          <div className={styles.actionContainer}>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Booking;
