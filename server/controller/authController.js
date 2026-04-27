let User = require("../models/userModel");
let { generateToken } = require("../utils/token");
let bcryptjs = require("bcryptjs");

exports.postSignUp = async (req, res, next) => {
  try {
    console.log(req.body);
    let { firstname, lastname, email, password, gender } = req.body;

    let [existingUser] = await User.findOne(email);

    if (existingUser.length > 0) {
      console.log("");
      return res.status(422).json({
        success: false,
        errorMessages: ["User Already Exists"],
      });
    }

    bcryptjs.hash(password, 12).then((hashPassword) => {
      let user = new User(firstname, lastname, email, hashPassword, gender);
      user.adduser().then((result) => {
        console.log("User Added Successfully....");

        return res.status(200).json({
          success: true,
          msg: "User added successfully",
        });
      });
    });
  } catch (err) {
    console.log("Some error occurred", err);

    return res.status(500).json({
      success: false,
      msg: "Error adding user",
    });
  }
};

exports.postLogin = async (req, res, next) => {
  let { email, password } = req.body;
  let [row] = await User.findOne(email);

  if (row.length === 0) {
    return res.status(404).json({
      success: false,
      message: "user loged In failed",
      errorMessages: ["User not Found"],
    });
  }
  let user = row[0];
  console.log(user);
  let isMatch = await bcryptjs.compare(password, user.password);
  if (isMatch) {
    let token = generateToken({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.status(200).json({
      success: true,
      message: "User Loged In Success",
    });
  } else {
    return res.status(404).json({
      success: false,
      message: "User Loged In Failed",
      errorMessages: ["Incorrect UserName or Password"],
    });
  }
};
exports.postLogout = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    })
    .status(200)
    .json({
      success: true,
      message: "Logged out successfully",
    });
};

exports.getMe = async (req, res, next) => {
  res.json({
    user: req.user,
  });
};
