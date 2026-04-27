import styles from "../styles/addParking/addparking.module.css";
import Stepper from "../components/addParking/Stepper";
import { useState } from "react";
import BasicInfo from "../components/addParking/BasicInfo";
import LocationInfo from "../components/addParking/LocationInfo";
import ParkingDetails from "../components/addParking/ParkingDetails";
import FeaturesInfo from "../components/addParking/FeaturesInfo";
import ReviewSubmit from "../components/addParking/ReviewSubmit";

function AddParking() {
  const [formData, setFormData] = useState({
    parkingName: "",
    imageUrl: "",
    address: "",
    totalSlots: "",
    price: "",
    openingTime: "",
    closingTime: "",
    parkingType: "",
    cctv: false,
    security: false,
    ev: false,
    covered: false,
  });
  const [step, setStep] = useState(0);
  const steps = ["Basic", "Location", "Details", "Features", "Review"];

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateField = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
        return <ReviewSubmit data={formData} prevStep={prevStep} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.addParking}>
        <Stepper steps={steps} currentStep={step} />

        {renderStep()}
      </div>
    </>
  );
}

export default AddParking;
