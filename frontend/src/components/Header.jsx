import styles from "../styles/header.module.css";
import ProfileDropDown from "../components/ProfileDropdown";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <span>P</span>
        <p>Smart Parking Finder</p>
      </div>
      <nav>
        <Link to="/addparking">
          {" "}
          <button>Add a Parking</button>
        </Link>

        <ProfileDropDown></ProfileDropDown>
      </nav>
    </div>
  );
}
export default Header;
