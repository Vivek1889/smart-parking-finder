import ParkingCards from "../components/parkings/ParkingCards";
import SortParking from "../components/parkings/SortParking";
import SearchBar from "../components/Home/SearchBar";
import ResponsiveSearchBar from "../components/parkings/ResponsiveSearchBar";
import styles from "../styles/parkings/parkings.module.css";
import { IoIosSearch } from "react-icons/io";
function Parkings() {
  return (
    <>
      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          {" "}
          <SearchBar></SearchBar>
        </div>

        <div className={styles.responsiveSearchBar}>
          <ResponsiveSearchBar></ResponsiveSearchBar>
        </div>
      </div>

      <div className={styles.parkings}>
        <div className={styles.sortParking}>
          <SortParking></SortParking>
        </div>

        <ParkingCards></ParkingCards>
      </div>
    </>
  );
}
export default Parkings;
