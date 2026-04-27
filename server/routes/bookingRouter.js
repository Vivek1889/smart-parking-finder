let express = require("express");
let verifyAuth = require("../middlewares/authMiddleware");
let bookingController = require("../controller/bookingController");
let bookingRouter = express.Router();
bookingRouter.post("/postbookings", verifyAuth, bookingController.postBooking);
bookingRouter.get(
  "/getbookings",
  verifyAuth,
  bookingController.fetchUserBooking,
);
bookingRouter.get(
  "/getallbookings/:parkingid",
  verifyAuth,
  bookingController.fetchAllBookings,
);
bookingRouter.delete(
  "/cancelbookings",
  verifyAuth,
  bookingController.cancelBooking,
);
module.exports = bookingRouter;
