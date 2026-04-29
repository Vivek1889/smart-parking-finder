import styles from "../styles/addParking/addparking.module.css";
import Stepper from "../components/addParking/Stepper";
import { useState, useEffect } from "react";
import BasicInfo from "../components/addParking/BasicInfo";
import LocationInfo from "../components/addParking/LocationInfo";
import ParkingDetails from "../components/addParking/ParkingDetails";
import FeaturesInfo from "../components/addParking/FeaturesInfo";
import ReviewSubmit from "../components/addParking/ReviewSubmit";
import Loader from "../components/Loader";
import Popup from "../components/Popup";
import API from "../services/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddParking() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) {
      return navigate("/auth/login");
    }
  }, [user, navigate]);

  const [showLoader, setShowLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    parkingname: "",
    imageurl: "",
    address: "",
    totalslots: "",
    price: "",
    openingtime: "",
    closingtime: "",
    parkingtype: "",
    cctv: false,
    security: false,
    charging: false,
    covered: false,
    latitude: "",
    longitude: "",
  });

  const [step, setStep] = useState(0);

  const steps = ["Basic", "Location", "Details", "Features", "Review"];

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      },
      (err) => console.error(err),
      { enableHighAccuracy: true },
    );
  }, []);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const updateField = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      await API.post("/addparking", formData);
      alert("Parking added successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to add parking");
    } finally {
      setShowLoader(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <BasicInfo
            data={formData}
            updateField={updateField}
            nextStep={nextStep}
          />
        );

      case 1:
        return (
          <LocationInfo
            data={formData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 2:
        return (
          <ParkingDetails
            data={formData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 3:
        return (
          <FeaturesInfo
            data={formData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 4:
        return (
          <ReviewSubmit
            data={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.addParking}>
      <Stepper steps={steps} currentStep={step} />

      {showLoader && <Loader />}

      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          message="User Registered Successfully"
        />
      )}

      {renderStep()}
    </div>
  );
}

export default AddParking;
