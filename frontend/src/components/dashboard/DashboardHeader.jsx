import styles from "../../styles/dashboard/dashboardheader.module.css";

import { useEffect, useState } from "react";
import API from "../../services/api";
function DashboardHeader({ parking }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (parking?.status === "active") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [parking]);
  const handleToggle = async () => {
    const newStatus = isActive ? "closed" : "active";

    setIsActive(!isActive);

    try {
      await API.post("/poststatus", {
        newstatus: newStatus,
        parkingid: parking.parkingid,
      });

      console.log("Status updated to:", newStatus);
    } catch (err) {
      console.error(err);

      setIsActive(isActive);
    }
  };

  return (
    <div className={styles.header}>
      <div>
        <h1>{parking?.name}</h1>
        <p className={styles.subText}>Manage your parking easily</p>
      </div>

      <label className={styles.toggle}>
        <input
          type="checkbox"
          className={styles.input}
          checked={isActive}
          onChange={handleToggle}
        />
        <span className={styles.slider}></span>
        <span className={styles.statusText}></span>
      </label>
    </div>
  );
}
export default DashboardHeader;
