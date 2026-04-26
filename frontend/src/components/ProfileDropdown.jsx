import styles from "../styles/profiledropdown.module.css";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";
function ProfileDropDown() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.profile} onClick={() => setOpen(!open)}>
          V
        </div>

        {open && (
          <ul className={styles.menu}>
            {/* this is profile Section */}
            <div className={styles.profileInfo}>
              <div className={styles.profile}>V</div>
              <div className={styles.profileDetails}>
                <h4>Vivek Kumar</h4>

                <p className="">viveksh94108@gmail.com</p>
              </div>
            </div>
            <hr />
            {/* Navigation Links  starts from here  */}
            <li>
              <a href="/">
                <div className={styles.linkInfo}>
                  <span>
                    <IoMdHome></IoMdHome>
                  </span>

                  <p>Home</p>
                </div>
                <p className={styles.icon}>
                  <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </p>
              </a>
            </li>
            <li>
              <a href="/">
                <div className={styles.linkInfo}>
                  <span>
                    <FaHistory></FaHistory>
                  </span>

                  <p>Booking History</p>
                </div>
                <p className={styles.icon}>
                  <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </p>
              </a>
            </li>
            <li>
              <a href="/">
                <div className={styles.linkInfo}>
                  <span>
                    <RxDashboard></RxDashboard>
                  </span>

                  <p>Dashboard</p>
                </div>
                <p className={styles.icon}>
                  <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </p>
              </a>
            </li>
            <li>
              <a href="/">
                <div className={styles.linkInfo}>
                  <span>
                    <TbLogout2></TbLogout2>
                  </span>

                  <p>Logout</p>
                </div>
                <p className={styles.icon}>
                  <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </p>
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
export default ProfileDropDown;
