import { MdEmail } from "react-icons/md";
import { TbLogin2, TbLockPassword } from "react-icons/tb";
import styles from "../../styles/auth/login.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../../services/api";
import Loader from "../Loader";

function Login() {
  let navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const [errors, setErrors] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowLoader(true);
    setErrors(null);

    try {
      const res = await API.post("/login", {
        email: email.current.value,
        password: password.current.value,
      });

      if (res.data.success) {
        alert("user Logged in success");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      setErrors(
        error.response?.data?.errorMessages || ["Invalid email or password"],
      );
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {showLoader && <Loader />}

      <div className={styles.loginBox}>
        <h1>Login</h1>
        <p className={styles.subtitle}>Welcome back to your account</p>

        {errors && (
          <div className={styles.errors}>
            <ul>
              <li>{errors}</li>
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>

            <div className={styles.inputWrapper}>
              <MdEmail className={styles.inputIcon} />

              <input
                ref={email}
                type="email"
                id="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>

            <div className={styles.inputWrapper}>
              <TbLockPassword className={styles.inputIcon} />

              <input
                ref={password}
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className={styles.formOptions}>
            <label className={styles.rememberMe}>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/auth/forgotpassword" className={styles.forgotLink}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.btnLogin}>
            Login
            <TbLogin2 className={styles.loginBtnIcon} />
          </button>
        </form>

        <div className={styles.divider}>OR</div>

        <div className={styles.signupSection}>
          <p>
            Don't have an account?
            <Link to="/auth/signup" className={styles.signupLink}>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
