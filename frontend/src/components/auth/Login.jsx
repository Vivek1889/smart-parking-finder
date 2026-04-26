import { MdEmail } from "react-icons/md";
import { TbLogin2, TbLockPassword } from "react-icons/tb";
import styles from "../../styles/auth/login.module.css";
import { useRef, useState, useEffect } from "react";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1>Login</h1>
        <p className={styles.subtitle}>Welcome back to your account</p>

        <form method="POST">
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={styles.inputWrapper}>
              <MdEmail className={styles.inputIcon} />
              <input
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
              {" "}
              Forgot password ?
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
            Don't have an account ?
            <a to="/auth/signup" className={styles.signupLink}>
              {" "}
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
