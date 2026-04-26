import styles from "../../styles/home/searchbar.module.css";
import { FaRegCircle } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdOutlineTimer } from "react-icons/md";
function SearchBar() {
  console.log(styles);
  return (
    <form className={styles.searchBar}>
      <div className={styles.wrapper}>
        <FaRegCircle></FaRegCircle>
        <input type="text" placeholder="Going to" required />
      </div>
      <div className={styles.wrapper}>
        <SlCalender></SlCalender>
        <input type="date" placeholder="Today" required />
      </div>
      <div className={styles.wrapper}>
        <MdOutlineTimer></MdOutlineTimer>
        <input type="time" placeholder="Time" required />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar;
