let express = require("express");
let verifyAuth = require("../middlewares/authMiddleware");
let dashboardController = require("../controller/dashboardController");
let dashboardRouter = express.Router();

dashboardRouter.get(
  "/getdashboard",
  verifyAuth,
  dashboardController.getDashboard,
);
dashboardRouter.post("/poststatus", verifyAuth, dashboardController.poststatus);
module.exports = dashboardRouter;
