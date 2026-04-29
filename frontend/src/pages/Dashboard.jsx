import styles from "../styles/dashboard/dashboard.module.css";
import Card from "../components/dashboard/Card";
import FormSection from "../components/dashboard/FormSection";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Bookings from "../components/dashboard/Bookings";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
export default function Dashboard() {
  let navigate = useNavigate();
  let [parking, setParking] = useState([]);
  const user = useSelector((store) => store.user);
  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
      window.location.reload();
    }
  });
  useEffect(() => {
    let fetchParkings = async () => {
      try {
        let res = await API.get("/getdashboard");
        setParking(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchParkings();
  }, []);
  return (
    <>
      <div className={styles.dashboard}>
        <DashboardHeader parking={parking}></DashboardHeader>

        <div className={styles.cards}>
          <Card title={"Total Slots"} value={parking.totalslots}></Card>
          <Card title={"Available Slots"} value={parking.availableslots}></Card>
          <Card title={"Active Bookings"} value={"20"}></Card>
          <Card title={"Total Revenue"} value={"2000"}></Card>
        </div>
        <FormSection parking={parking}></FormSection>
        <Bookings parking={parking}></Bookings>
      </div>
    </>
  );
}
