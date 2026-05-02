let express = require("express");

let emailRouter = express.Router();
let emailController = require("../controller/emailController");
emailRouter.get("/sendotp", emailController.sendOtp);
module.exports = emailRouter;
