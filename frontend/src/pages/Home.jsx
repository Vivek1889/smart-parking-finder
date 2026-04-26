import HeroSection from "../components/Home/HeroSection";
import SearchBar from "../components/Home/SearchBar";
import FeaturesSection from "../components/Home/FeaturesSection";
import AddParkingSection from "../components/Home/AddParkingSection";

import styles from "../styles/home/home.module.css";
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
