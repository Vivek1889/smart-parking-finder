import styles from "../../styles/booking/bookingdetails.module.css";
import BoongngItem from "./BookingItem";
import BookingSummary from "./BookingSummary";
import { useSelector } from "react-redux";
function BookingDetails() {
  let parking = useSelector((store) => store.bookingDetails || null);

  if (!parking) {
    return <h2>Loading booking details...</h2>;
  }

  return (
    <div className={styles.container}>
      <BoongngItem data={parking} />
      <BookingSummary data={parking} />
    </div>
  );
}
export default BookingDetails;
