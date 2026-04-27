import { createSlice } from "@reduxjs/toolkit";
let bookingSlice = createSlice({
  name: "bookingSlice",
  initialState: null,
  reducers: {
    setBookingSlice: (state, action) => {
      return action.payload;
    },
  },
});
export default bookingSlice.reducer;
export let bookingActions = bookingSlice.actions;
