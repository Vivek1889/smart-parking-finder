import styles from "../../styles/booking/bookingitem.module.css";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { LuCctv, LuShell } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { FaPersonShelter } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { FaStar, FaBolt, FaCar, FaChevronRight } from "react-icons/fa";

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
function BookingItem({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.timeSection}>
          <h4>
            {" "}
            <span>
              <BsCalendarDateFill></BsCalendarDateFill>
            </span>
            10/11/2020
          </h4>
          <p>
            {" "}
            <span>
              {" "}
              <MdAccessTimeFilled />
            </span>
            00:10:20
          </p>
        </div>

        <div className={styles.parkingDetails}>
          <h4>City Mall Parking</h4>
          <p>
            {" "}
            <GrLocationPin></GrLocationPin>Mehrauli Dashna - 201015
          </p>
        </div>
      </div>
      {/* second card */}
      <div className={styles.card}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.profileSection}>
            <img
              src="https://www.shutterstock.com/image-photo/aerial-view-city-parking-260nw-2597475437.jpg"
              alt="driver"
              className={styles.profileImage}
            />

            <div className={styles.profileInfo}>
              <h3>City Mall Parking</h3>

              <div className={styles.rating}>
                <FaStar />
                <span>4.3/5 - 27 ratings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Info */}
        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <LuCctv></LuCctv>
            <p>CCTV Enabled</p>
          </div>
          <div className={styles.infoItem}>
            <MdOutlineSecurity />
            <p>Security Provided</p>
          </div>
          <div className={styles.infoItem}>
            <GiElectric />
            <p>Charging for EV</p>
          </div>
          <div className={styles.infoItem}>
            <FaPersonShelter />
            <p>Parking is Fully Covered</p>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Rules */}
        <div className={styles.rulesSection}>
          <div className={styles.ruleItem}>
            <FaBolt />
            <p>Your booking will be confirmed instantly</p>
          </div>
        </div>

        {/* Button */}
        <button className={styles.contactBtn}>
          <HiOutlineChatBubbleLeftRight />
          Contact Parking Owner
        </button>
      </div>
    </div>
  );
}

export default BookingItem;
