import styles from "../../styles/auth/personaldetails.module.css";

function PersonalDetails({ data, handleChange, handleSubmit, errors }) {
  return (
    <form className={styles.personalDetails} onSubmit={handleSubmit}>
      <h2>Personal Details</h2>
      {errors && (
        <div className={styles.errors}>
          <ul>
            <li>{errors}</li>
          </ul>
        </div>
      )}
      <input
        type="text"
        name="firstname"
        placeholder="Enter first name"
        value={data.firstname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastname"
        placeholder="Enter last name"
        value={data.lastname}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={data.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password"
        value={data.confirmpassword}
        onChange={handleChange}
      />

      <div className={styles.genderBox}>
        <p>Select Gender</p>

        <div className={styles.genderInputs}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={data.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={data.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={data.gender === "other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
      </div>

      <button type="submit">Continue</button>
    </form>
  );
}

export default PersonalDetails;
