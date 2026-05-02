import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";
import { FaTransgender } from "react-icons/fa";
import { Link } from "react-router-dom";
import Popup from "../Popup";
import Loader from "../Loader";
import styles from "../../styles/auth/signup.module.css";
import { useRef, useState } from "react";
import API from "../../services/api";
function SignUp() {
  let [showPopup, setShowPopup] = useState(false);
  let [showLoader, setShowLoader] = useState(false);
  let [errors, setErrors] = useState(null);
  let firstname = useRef();
  let lastname = useRef();
  let email = useRef();
  let password = useRef();
  let confirmpassword = useRef();
  let terms = useRef();
  let gender = useRef();

  let handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmpassword: confirmpassword.current.value,
      gender: gender.current.value,
    };

    try {
      setShowLoader(true);
      let res = await API.post("/signup", formData);

      if (res.data.success) {
        firstname.current.value = "";
        lastname.current.value = "";
        email.current.value = "";
        password.current.value = "";
        confirmpassword.current.value = "";
        setShowPopup(true);
      }
    } catch (err) {
      setErrors(err.response?.data.errorMessages);
      setInterval(() => {
        setErrors(null);
      }, 2000);
      console.log(err.response?.data || err.message);
    } finally {
      setShowLoader(false);
    }
  };
  return (
    <div className={styles.authContainer}>
      {showPopup && (
        <Popup
          message={"User Added Successfull"}
          setShowPopup={setShowPopup}
        ></Popup>
      )}
      {showLoader && <Loader></Loader>}
      <div className={styles.signupContainer}>
        <div className={styles.signupHeader}>
          <p>Start for free</p>
          <h2>Create Your Account</h2>
        </div>
        {errors !== null && (
          <div className={styles.errors}>
            <ul>
              {errors?.map((err) => {
                return <li>{err}</li>;
              })}
            </ul>
          </div>
        )}

        <form
          method="POST"
          onSubmit={handleSubmit}
          className={styles.signupForm}
        >
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <BiSolidUser className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="firstname"
                  ref={firstname}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <BiSolidUser className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  required
                  ref={lastname}
                />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <MdEmail className={styles.inputIcon} />
              <input
                type="email"
                placeholder="your@email.com"
                required
                name="email"
                ref={email}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <TbLockPassword className={styles.inputIcon} />
              <input
                type="password"
                placeholder="Create a strong password"
                required
                name="password"
                ref={password}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <TbLockPassword className={styles.inputIcon} />
              <input
                type="password"
                placeholder="Confirm your password"
                required
                name="confirmpassword"
                ref={confirmpassword}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Select your Gender</label>

            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  id="gender"
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  ref={gender}
                />
                <FaMale className={styles.radioIcon} />
                <span>Male</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  id="gender"
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  ref={gender}
                />
                <FaFemale className={styles.radioIcon} />
                <span>Female</span>
              </label>

              <label className={styles.radioLabel}>
                <input
                  id="gender"
                  type="radio"
                  name="gender"
                  value="other"
                  required
                  ref={gender}
                />
                <FaTransgender className={styles.radioIcon} />
                <span>Other</span>
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" required ref={terms} name="terms" />
              <span>I agree to the terms and conditions</span>
            </label>
          </div>

          <button type="submit" className={styles.btnRegister}>
            Get OTP
            <BiUserPlus className={styles.btnIcon} />
          </button>
        </form>

        <p className={styles.loginLink}>
          Already have an account ?<Link to="/auth/login"> Log in here </Link>
        </p>
      </div>
    </div>
  );
}
export default SignUp;
