import ParkingCard from "./ParkingCard";
import styles from "../../styles/parkings/parkingcards.module.css";

import Loader from "../Loader";
import API from "../../services/api";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { homeActions } from "../../store/parkingCards";
import Paging from "./Paging";

function ParkingCards() {
  const dispatch = useDispatch();

  const [showLoader, setShowLoader] = useState(false);

  const parkingsData = useSelector((store) => store.parkingCards || []);

  useEffect(() => {
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
  }, [dispatch]);

  return (
    <>
      {showLoader && <Loader />}

      <div className={styles.parkingCards}>
        <p>Outbound • Tomorrow to Shamli</p>

        {parkingsData.map((parking) => (
          <ParkingCard data={parking} key={parking._id || parking.id} />
        ))}
        <Paging></Paging>
      </div>
    </>
  );
}

export default ParkingCards;
