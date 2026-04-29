import styles from "../styles/profiledropdown.module.css";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { IoPersonAdd } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import API from "../services/api";
function ProfileDropDown() {
  const [open, setOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const handleLogout = async () => {
    try {
      await API.post("/logout");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.profile} onClick={() => setOpen(!open)}>
          <span>{user?.firstname[0] || <FaUserAlt></FaUserAlt>}</span>
        </div>

        {open && (
          <ul className={styles.menu}>
            {/* this is profile Section */}
            {user && (
              <div className={styles.profileInfo}>
                <div className={styles.profile}>V</div>
                <div className={styles.profileDetails}>
                  <h4>{`${user?.firstname}  ${user.lastname}`}</h4>

                  <p className="">{user.email}</p>
                </div>
              </div>
            )}
            <hr />

            <li>
              <Link to="/">
                <div className={styles.linkInfo}>
                  <span>
                    <IoMdHome></IoMdHome>
                  </span>

                  <p>Home</p>
                </div>
                <p className={styles.icon}>
                  <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </p>
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/bookings">
                  <div className={styles.linkInfo}>
                    <span>
                      <FaHistory></FaHistory>
                    </span>

                    <p>Bookings</p>
                  </div>
                  <p className={styles.icon}>
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </p>
                </Link>
              </li>
            )}
            {user?.role === "host" && (
              <li>
                <Link to="/dashboard">
                  <div className={styles.linkInfo}>
                    <span>
                      <RxDashboard />
                    </span>

                    <p>Dashboard</p>
                  </div>

                  <p className={styles.icon}>
                    <MdOutlineKeyboardArrowRight />
                  </p>
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/auth/login">
                  <div className={styles.linkInfo}>
                    <span>
                      <TbLogin2></TbLogin2>
                    </span>

                    <p>Login</p>
                  </div>
                  <p className={styles.icon}>
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </p>
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/auth/signup">
                  <div className={styles.linkInfo}>
                    <span>
                      <IoPersonAdd></IoPersonAdd>
                    </span>

                    <p>Sign Up</p>
                  </div>
                  <p className={styles.icon}>
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                  </p>
                </Link>
              </li>
            )}
            {user && (
              <li
                onClick={() => {
                  handleLogout();
                }}
              >
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
            )}
          </ul>
        )}
      </div>
    </>
  );
}
export default ProfileDropDown;
