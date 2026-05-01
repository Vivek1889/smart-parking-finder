import styles from "../../styles/parkings/sortparking.module.css";
import { useState } from "react";

import { FaMapMarkerAlt, FaWalking } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaHourglassEnd } from "react-icons/fa";

const SortParking = () => {
  const [selected, setSelected] = useState("earliest");

  return (
    <div className={styles.container}>
      <div className={styles.mapCard}>
        <button className={styles.mapBtn}>
          <FaMapMarkerAlt /> Show rides on map
        </button>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>
          <h3>Sort by</h3>
          <span>Clear all</span>
        </div>

        {[
          {
            id: "earliest",
            label: "Earliest departure",
            icon: <MdAccessTime />,
          },
          {
            id: "price",
            label: "Lowest price",
            icon: <RiMoneyDollarCircleLine />,
          },
          {
            id: "departure",
            label: "Close to departure point",
            icon: <FaWalking />,
          },
          {
            id: "arrival",
            label: "Close to arrival point",
            icon: <FaWalking />,
          },
          { id: "shortest", label: "Shortest ride", icon: <FaHourglassEnd /> },
        ].map((item) => (
          <div
            key={item.id}
            className={styles.option}
            onClick={() => setSelected(item.id)}
          >
            <div className={styles.left}>
              <div
                className={`${styles.radio} ${
                  selected === item.id ? styles.active : ""
                }`}
              />
              <span>{item.label}</span>
            </div>
            <div className={styles.icon}>{item.icon}</div>
          </div>
        ))}
      </div>

      <div className={styles.divider}></div>

      {/* DEPARTURE TIME */}
      <div className={styles.section}>
        <h3>Opening time</h3>

        {["Before 06:00", "06:00 - 12:00", "12:01 - 18:00", "After 18:00"].map(
          (time, i) => (
            <div key={i} className={styles.option}>
              <div className={styles.left}>
                <input type="checkbox" />
                <span>{time}</span>
              </div>
              <span className={styles.count}>25</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default SortParking;
