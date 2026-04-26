import styles from "../../styles/home/featuressection.module.css";
import FeatureCard from "./FeatureCard";
import { MdCardTravel } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
function FeaturesSection() {
  let features = [
    {
      logo: <MdCardTravel></MdCardTravel>,
      heading: "Travel everywhere",
      description: "Explore all over India with countless parkings.",
    },
    {
      logo: <IoMdPricetags></IoMdPricetags>,
      heading: "Price like nowhere",
      description: "Book your parkings a a very reasonable price",
    },
    {
      logo: <MdOutlineSecurity />,
      heading: "Book Securely",
      description: "Book Your parking with trusted partners.",
    },
  ];
  return (
    <>
      <div className={styles.featureSection}>
        {features.map((feature) => (
          <FeatureCard key={feature.heading} feature={feature} />
        ))}
      </div>
    </>
  );
}
export default FeaturesSection;
