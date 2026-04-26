import styles from "../../styles/auth/personaldetails.module.css";

function PersonalDetails() {
  return (
    <form className={styles.personalDetails}>
      <h2>Personal Details</h2>

      <input type="text" placeholder="Enter first name" />

      <input type="text" placeholder="Enter last name" />

      <div className={styles.genderBox}>
        <p>Select Gender</p>
        <div className={styles.genderInputs}>
          <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>

          <label>
            <input type="radio" name="gender" value="other" />
            Other
          </label>
        </div>
      </div>

      <button type="submit">Continue</button>
    </form>
  );
}

export default PersonalDetails;
