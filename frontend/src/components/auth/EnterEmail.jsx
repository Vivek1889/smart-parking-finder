import styles from "../../styles/auth/enteremail.module.css";

function EnterEmail({ data, handleChange, nextStep }) {
  const submitHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <h1>Enter Your Email.</h1>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={data.email}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="acceptedTerms"
          checked={data.acceptedTerms}
          onChange={handleChange}
        />
        Accept Terms
      </label>
      <p>Click on continue for next step</p>
      <button type="submit">Continue</button>
    </form>
  );
}

export default EnterEmail;
