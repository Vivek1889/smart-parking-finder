import styles from "../../styles/dashboard/booking.module.css";
import { useEffect, useState } from "react";
import API from "../../services/api";

function Bookings({ parking }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!parking?.parkingid) return;

    const fetchBookings = async () => {
      try {
        let res = await API.get(`/getallbookings/${parking.parkingid}`);
        console.log(res.data);
        setBookings(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, [parking.parkingid]);

  const updateStatus = (id, newStatus) => {
    const updated = bookings.map((item) =>
      item.bookingid === id ? { ...item, status: newStatus } : item,
    );
    setBookings(updated);
  };

  const getStatusClass = (status) => {
    if (status === "Active") return styles.active;
    if (status === "Completed") return styles.completed;
    if (status === "Cancelled") return styles.cancelled;
    return "";
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bookings</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Name</th>
            <th>Vehicle No</th>
            <th>Vehicle Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((item) => {
            const isDisabled = item.status !== "";

            return (
              <tr key={item.bookingid} className={styles.row}>
                <td>{item.bookingid}</td>
                <td>{item.firstname}</td>
                <td>{item.vehicleno}</td>
                <td>{item.vehicletype}</td>
                <td>{item.bookingdate}</td>
                <td>
                  <span
                    className={`${styles.status} ${getStatusClass(item.status)}`}
                  >
                    {item.status || "Pending"}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button
                      className={`${styles.btn} ${styles.activeBtn} ${
                        isDisabled ? styles.disabled : ""
                      }`}
                      onClick={() => updateStatus(item.bookingid, "Active")}
                    >
                      Active
                    </button>

                    <button
                      className={`${styles.btn} ${styles.completedBtn} ${
                        isDisabled ? styles.disabled : ""
                      }`}
                      onClick={() => updateStatus(item.bookingid, "Completed")}
                    >
                      Completed
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;
