import styles from "../styles/popup.module.css";

import { VscCopilotSuccess } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

function Popup({ message, setShowPopup }) {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <div onClick={() => setShowPopup(false)} className={styles.crossIcon}>
            <IoCloseOutline></IoCloseOutline>
          </div>

          <div className={styles.popupIcon}>
            <VscCopilotSuccess />
          </div>

          <h1>{message}</h1>
        </div>
      </div>
    </>
  );
}
export default Popup;
