import styles from "../styles/footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <>
      {" "}
      <footer className={styles.footer}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2>ParkSmart</h2>
            <p>
              Find, book and manage parking spaces easily with our smart parking
              solutions.
            </p>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/">Find Parking</a>
            <a href="/">Pricing</a>
            <a href="/">Contact</a>
          </div>

          <div className={styles.links}>
            <h3>Support</h3>
            <a href="/">Help Center</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">FAQs</a>
          </div>

          <div className={styles.social}>
            <h3>Follow Us</h3>

            <div className={styles.icons}>
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaLinkedinIn />
              </a>
              <a href="/">
                <FaGithub />
              </a>
            </div>

            <p>Email: support@parksmart.com</p>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© 2026 ParkSmart. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
