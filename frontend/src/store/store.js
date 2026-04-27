import { configureStore } from "@reduxjs/toolkit";
import parkingCards from "./parkingCards";
import bookingDetails from "./bookingDetails";
import bookingSlice from "./bookingSlice";
import userSlice from "./userSlice";
import currPage from "./currPageSlice";
let store = configureStore({
  reducer: {
    user: userSlice,
    parkingCards: parkingCards,
    bookingDetails: bookingDetails,
    bookingSlice: bookingSlice,
    currPage: currPage,
  },
});
export default store;
