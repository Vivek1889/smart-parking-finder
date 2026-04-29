let express = require("express");
let parkingController = require("../controller/parkingController");
let verifyAuth = require("../middlewares/authMiddleware");
let parkingRouter = express.Router();

parkingRouter.post("/addparking", verifyAuth, parkingController.postAddParking);
parkingRouter.get("/getallparkings", parkingController.getAllParkings);
parkingRouter.put(
  "/editparking/:id",
  verifyAuth,
  parkingController.editParking,
);
module.exports = parkingRouter;
