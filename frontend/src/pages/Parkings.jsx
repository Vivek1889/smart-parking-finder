import ParkingCards from "../components/parkings/ParkingCards";
import SortParking from "../components/parkings/SortParking";
import SearchBar from "../components/Home/SearchBar";
import styles from "../styles/parkings/parkings.module.css";
function Parkings() {
  return (
    <>
      <div className={styles.searchSection}>
        <SearchBar></SearchBar>
      </div>
      <div className={styles.parkings}>
        <SortParking></SortParking>
        <ParkingCards></ParkingCards>
      </div>
    </>
  );
}
export default Parkings;
