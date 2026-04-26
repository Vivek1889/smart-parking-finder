import HeroSection from "../components/Home/HeroSection";
import SearchBar from "../components/Home/SearchBar";
import styles from "../styles/home/home.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <HeroSection></HeroSection>
      <SearchBar></SearchBar>
    </div>
  );
}
export default Home;
