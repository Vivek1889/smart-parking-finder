import styles from "../styles/header.module.css";
import ProfileDropDown from "../components/ProfileDropdown";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <span>P</span>
        <p>Smart Parking Finder</p>
      </div>
      <nav>
        <button>Add a Parking</button>
        <ProfileDropDown></ProfileDropDown>
      </nav>
    </div>
  );
}
export default Header;
