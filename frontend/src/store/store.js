import { configureStore } from "@reduxjs/toolkit";
import parkingCards from "./parkingCards";
import parkingDetails from "./parkingDetails";
import bookingSlice from "./bookingSlice";
import userSlice from "./userSlice";
import currPage from "./currPageSlice";
let store = configureStore({
  reducer: {
    user: userSlice,
    parkingCards: parkingCards,
    parkingDetails: parkingDetails,
    bookingSlice: bookingSlice,
    currPage: currPage,
  },
});
export default store;
