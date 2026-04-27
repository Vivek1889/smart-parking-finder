import styles from "../../styles/dashboard/dashboardheader.module.css";

import { useEffect, useState } from "react";
function DashboardHeader({ parking }) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = async () => {
    const newStatus = isActive ? "closed" : "active";
    setIsActive(!isActive);
  };

  return (
    <div className={styles.header}>
      <div>
        <h1>{parking?.name} city mall</h1>
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
