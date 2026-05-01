import styles from "../../styles/parkings/paging.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Paging() {
  return (
    <div className={styles.paging}>
      <span>
        <FaArrowLeft></FaArrowLeft>
      </span>
      <span>1</span>
      <span>2</span>
      <span>
        <FaArrowRight></FaArrowRight>
      </span>
    </div>
  );
}
export default Paging;
