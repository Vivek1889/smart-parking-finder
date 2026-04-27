let express = require("express");
let verifyAuth = require("../middlewares/authMiddleware");

let authRouter = express.Router();
//local modules
let authController = require("../controller/authController");
authRouter.post("/signup", authController.postSignUp);
authRouter.post("/login", authController.postLogin);
authRouter.get("/me", verifyAuth, authController.getMe);
module.exports = authRouter;
