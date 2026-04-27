import { createSlice } from "@reduxjs/toolkit";

let parkingCards = createSlice({
  name: "parkingCards",
  initialState: [],
  reducers: {
    setParkingCards: (state, action) => {
      return action.payload;
    },
  },
});
export default parkingCards.reducer;
export let homeActions = parkingCards.actions;
