import styles from "../../styles/addParking/stepper.module.css";

import { useState } from "react";

function Stepper({ currentStep, steps }) {
  return (
    <div className={styles.stepper}>
      {steps.map((label, index) => (
        <div key={index} className={styles.stepWrapper}>
          <div
            className={`${styles.stepCircle} ${
              index <= currentStep ? styles.active : ""
            }`}
          >
            {index + 1}
          </div>

          <span className={styles.label}>{label}</span>

          {index < steps.length - 1 && (
            <div
              className={`${styles.line} ${
                index < currentStep ? styles.activeLine : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
