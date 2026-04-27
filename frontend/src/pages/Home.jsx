import HeroSection from "../components/Home/HeroSection";
import SearchBar from "../components/Home/SearchBar";
import FeaturesSection from "../components/Home/FeaturesSection";
import AddParkingSection from "../components/Home/AddParkingSection";
import Popup from "../components/Popup";
import styles from "../styles/home/home.module.css";
import Loader from "../components/Loader";
function Home() {
  return (
    <div className={styles.home}>
      <HeroSection></HeroSection>
      <SearchBar></SearchBar>

      <FeaturesSection></FeaturesSection>
      <AddParkingSection></AddParkingSection>
    </div>
  );
}
export default Home;
