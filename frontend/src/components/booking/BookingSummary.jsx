import styles from "../../styles/booking/bookingsummary.module.css";
import BookingInput from "./BookingInput";
import API from "../../services/api";
import Loader from "../Loader";
import Popup from "../Popup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";

function BookingSummary({ data }) {
  let navigate = useNavigate();
  const user = useSelector((store) => store.user);
  let [showLoader, setShowLoader] = useState(false);
  let [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  let finalAmount = Number(data.price) + 2;
  const [formData, setFormData] = useState({
    vehicleno: "",
    date: "",
    vehicleType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      return navigate("/auth/login");
    }
    let payload = {
      parkingid: data.parkingid,
      vehicleno: formData.vehicleno,
      date: formData.date,
      vehicletype: formData.vehicleType,
    };

    try {
      setShowLoader(true);
      let res = await API.post("/postbookings", payload);
      console.log(res.data);
      if (res.data.success) {
        setShowPopup(true);
        setPopupMessage("Booking Confirmed");
      } else {
        setShowPopup(true);
        setPopupMessage("You Can Book Only 1 Parking");
      }
    } catch (error) {
      setShowPopup(true);
      setPopupMessage("Error in submitting");
    } finally {
      setShowLoader(false);
    }
  };
  return (
    <>
      <form className={styles.bagSummaryContainer} onSubmit={handleSubmit}>
        {showLoader && <Loader></Loader>}
        {showPopup && (
          <Popup message={popupMessage} setShowPopup={setShowPopup}></Popup>
        )}
        <BookingInput formData={formData} handleChange={handleChange} />
        <div className={styles.bagSummary}>
          <div>
            <div className={styles.priceHeader}>PRICE DETAILS (1 Item)</div>

            <div className={styles.priceItem}>
              <span className={styles.priceItemTag}>Total MRP</span>
              <span className={styles.priceItemValue}>₹{data.price}</span>
            </div>
            <div className={styles.priceItem}>
              <span className={styles.priceItemTag}>Platform Fee</span>
              <span className={styles.priceItemValue}>₹2</span>
            </div>

            <hr />

            <div className={styles.priceFooter}>
              <span className={styles.priceItemTag}>Total Amount</span>
              <span className={styles.priceItemValue}>₹{finalAmount}</span>
            </div>
          </div>

          <button
            type="submit"
            className={`${styles.placeOrderBtn} ${
              data?.status === "closed" ? styles.disabled : ""
            }`}
            disabled={data.status === "closed"}
          >
            CONFIRM BOOKING
          </button>
        </div>
      </form>
    </>
  );
}
export default BookingSummary;
