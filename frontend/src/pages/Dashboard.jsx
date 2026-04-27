import styles from "../styles/dashboard/dashboard.module.css";
import Card from "../components/dashboard/Card";
import FormSection from "../components/dashboard/FormSection";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Bookings from "../components/dashboard/Bookings";
import { useEffect, useState } from "react";

export default function Dashboard() {
  let [parking, setParking] = useState([]);
  return (
    <>
      <div className={styles.dashboard}>
        <DashboardHeader parking={parking}></DashboardHeader>
        <div className={styles.cards}>
          <Card title={"Total Slots"} value={parking.totalslots}></Card>
          <Card title={"Available Slots"} value={parking.availableslots}></Card>
          <Card title={"Active Bookings"} value={"200"}></Card>
          <Card title={"Total Revenue"} value={"2000"}></Card>
        </div>
        <FormSection parking={parking}></FormSection>
        <Bookings parking={parking}></Bookings>
      </div>
    </>
  );
}
