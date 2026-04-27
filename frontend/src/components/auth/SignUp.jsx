import { useEffect, useState } from "react";
import EnterEmail from "./EnterEmail";
import PersonalDetails from "./PersonalDetails";
import styles from "../../styles/auth/signup.module.css";
import Loader from "../Loader";
import Popup from "../Popup";
import API from "../../services/api";
function SignUp() {
  const [step, setStep] = useState(1);
  let [errors, setErrors] = useState(null);
  let [showLoader, setShowLoader] = useState(false);
  let [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    acceptedTerms: false,
    firstname: "",
    lastname: "",
    gender: "",
    password: "",
    confirmpassword: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    try {
      const res = await API.post("/signup", formData);
      if (res.data.success) {
        setFormData({
          email: "",
          acceptedTerms: false,
          firstname: "",
          lastname: "",
          gender: "",
          password: "",
          confirmpassword: "",
        });
        setShowPopup(true);
      }
      console.log(res.data);
    } catch (error) {
      setErrors(error.response.data.errorMessages);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div className={styles.signup}>
      {showLoader && <Loader></Loader>}
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          message={"User Registered Successfull"}
        ></Popup>
      )}
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
          errors={errors}
        />
      )}
    </div>
  );
}

export default SignUp;
