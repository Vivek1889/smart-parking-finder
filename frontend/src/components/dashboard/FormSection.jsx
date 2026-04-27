import styles from "../../styles/dashboard/formsection.module.css";
import { useState, useEffect } from "react";
import Loader from "../Loader";
import Popup from "../Popup";
import API from "../../services/api";
function FormSection({ parking }) {
  const [isEditing, setIsEditing] = useState(false);
  let [showPopup, setShowPopup] = useState(false);
  let [showLoader, setShowLoader] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    totalslots: "",
    price: "",
    openingtime: "",
    closingtime: "",
    parkingid: "",
  });

  useEffect(() => {
    if (parking) {
      setFormData({
        name: parking.name || "",
        totalslots: parking.totalslots || "",
        price: parking.price || "",
        openingtime: parking.openingtime || "",
        closingtime: parking.closingtime || "",
        parkingid: parking.parkingid || "",
      });
    }
  }, [parking]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    console.log("Updated Data:", formData);

    try {
      setShowLoader(true);

      let res = await API.put(`/editparking/${parking.parkingid}`, formData);
      if (res.data.success) {
        setShowPopup(true);
      }

      setIsEditing(false);
    } catch (error) {
      console.log(error);

      alert("Failed to update parking");
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div className={styles.formSection}>
      {showLoader && <Loader></Loader>}
      {showPopup && (
        <Popup
          message={"Parking Edit Successfull"}
          setShowPopup={setShowPopup}
        ></Popup>
      )}
      <div className={styles.formHeader}>
        <h3>Edit Parking</h3>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label>Parking Name</label>
          <input
            name="name"
            value={formData.name}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Total Slots</label>
          <input
            type="number"
            name="totalslots"
            value={formData.totalslots}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Opening Time</label>
          <input
            type="time"
            name="openingtime"
            value={formData.openingtime}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Closing Time</label>
          <input
            type="time"
            name="closingtime"
            value={formData.closingtime}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.buttonFooter}>
        {!isEditing ? (
          <button className={styles.editBtn} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        ) : (
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default FormSection;
