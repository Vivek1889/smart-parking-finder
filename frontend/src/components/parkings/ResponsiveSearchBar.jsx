import { useState } from "react";
import styles from "../../styles/parkings/responsivesearch.module.css";
import SearchBar from "../Home/SearchBar";
import SortParking from "./SortParking";
import { GoSearch } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

function ResponsiveSearchBar() {
  let [showSearch, setShowSearch] = useState(false);
  let [showSort, setShowSort] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <GoSearch
            className={styles.icon}
            onClick={() => {
              setShowSearch(true);
            }}
          ></GoSearch>
          <span
            onClick={() => {
              setShowSearch(true);
            }}
          >
            <h5>Shamli india-247777</h5>
            <p>10/11/2003</p>
          </span>
          <p
            onClick={() => {
              setShowSort(true);
            }}
          >
            Filter
          </p>
        </div>
      </div>
      {showSearch && (
        <div className={styles.overlay}>
          <RxCross1
            className={styles.cross}
            onClick={() => {
              setShowSearch(false);
            }}
          ></RxCross1>
          <h1>Edit Your Search Here</h1>
          <SearchBar></SearchBar>
        </div>
      )}
      {showSort && (
        <div className={styles.overlay}>
          <RxCross1
            className={styles.cross}
            onClick={() => {
              setShowSort(false);
            }}
          ></RxCross1>
          <h1>Filters</h1>
          <SortParking></SortParking>
        </div>
      )}
    </>
  );
}
export default ResponsiveSearchBar;
