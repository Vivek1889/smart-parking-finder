import styles from "../../styles/home/addparkingsection.module.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function AddParkingSection() {
  return (
    <div className={styles.addParkingSection}>
      <h1>Add Your Parking. Starts earning</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
        deserunt consequuntur temporibus? Iure et vitae quas dicta nostrum?
        Voluptate quibusdam, deserunt sunt quasi tempore eveniet recusandae
        dolore reiciendis iste!
      </p>
      <Link to="/addparking" className={styles.link}>
        <button>
          {" "}
          <FaArrowRight></FaArrowRight> Add Parking
        </button>
      </Link>
    </div>
  );
}
export default AddParkingSection;
