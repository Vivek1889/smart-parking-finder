import { useRef, useState } from "react";
import styles from "../../styles/auth/verifyemail.module.css";

function VerifyEmail() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    console.log("Entered OTP:", finalOtp);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1>Verify Email</h1>

      <p className={styles.info}>Enter the 6-digit code sent to your email</p>

      <div className={styles.otpBox}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
          />
        ))}
      </div>

      <button type="submit">Verify</button>

      <span className={styles.resend}>
        Didn't receive code? <a href="/">Resend OTP</a>
      </span>
    </form>
  );
}

export default VerifyEmail;
