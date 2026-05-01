import styles from "../styles/header.module.css";
import ProfileDropDown from "../components/ProfileDropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div
        className={styles.logoContainer}
        onClick={() => {
          navigate("/");
        }}
      >
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
