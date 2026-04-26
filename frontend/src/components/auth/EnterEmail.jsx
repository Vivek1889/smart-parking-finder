import styles from "../../styles/auth/enteremail.module.css";

function EnterEmail() {
  return (
    <form className={styles.container}>
      <h1>Enter Your Email.</h1>
      <input type="text" placeholder="Enter email" />
      <label htmlFor="terms">
        <input type="checkbox" id="terms" />
        Accept terms and conditions ?
      </label>
      <p>Click on continue to get otp for verifying email</p>
      <button type="submit">Continue</button>
    </form>
  );
}
export default EnterEmail;
