import { useState } from "react";
import EnterEmail from "./EnterEmail";
import PersonalDetails from "./PersonalDetails";
import styles from "../../styles/auth/signup.module.css";

function SignUp() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    acceptedTerms: false,
    firstName: "",
    lastName: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => {
    if (!formData.email || !formData.acceptedTerms) {
      alert("Fill email and accept terms");
      return;
    }

    setStep(2);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className={styles.signup}>
      {step === 1 && (
        <EnterEmail
          data={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <PersonalDetails
          data={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default SignUp;
