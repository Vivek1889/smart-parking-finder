import ParkingCard from "./ParkingCard";
import styles from "../../styles/parkings/parkingcards.module.css";
import Loader from "../Loader";
import API from "../../services/api";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { homeActions } from "../../store/parkingCards";
function ParkingCards() {
  let dispatch = useDispatch();
  let [showLoader, setShowLoader] = useState(false);
  const parkingsData = useSelector((store) => store.parkingCards || []);

  useEffect(() => {
    setShowLoader(true);
    const fetchParkings = async () => {
      try {
        setShowLoader(true);
        const res = await API.get("/getallparkings");
        dispatch(homeActions.setParkingCards(res.data.data));
      } catch (error) {
        console.error("Error fetching parkings:", error);
      } finally {
        setShowLoader(false);
      }
    };

    fetchParkings();
  }, []);
  return (
    <>
      <div className={styles.parkingCards}>
        {showLoader && <Loader></Loader>}
        {parkingsData.map((parkingData, index) => (
          <ParkingCard key={index} parking={parkingData} />
        ))}
      </div>
    </>
  );
}
export default ParkingCards;
