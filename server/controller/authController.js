let User = require("../models/userModel");
let { generateToken } = require("../utils/token");
let bcryptjs = require("bcryptjs");
let { check, validationResult } = require("express-validator");
exports.postSignUp = [
  check("firstname")
    .notEmpty()
    .withMessage("First Name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name contains atleast 2 Characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First Name can only contains letters"),
  check("lastname")
    .notEmpty()
    .withMessage("Last Name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Last Name contains atleast 2 Characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Last Name can only contains letters"),

  check("email")
    .isEmail()
    .withMessage("Please Enter a valid Email")
    .normalizeEmail(),

  check("password")
    .notEmpty()
    .withMessage("password is required")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must contains at least 1 Lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contains at least 1 Uppercase letter")
    .matches(/[!@#$%^&*(){}|<>]/)
    .withMessage("Password must contains at least 1 Special Character")
    .trim(),

  check("confirmpassword")
    .trim()
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Password do not match");
      }
      return true;
    }),
  check("role")
    .notEmpty()
    .withMessage("User Type is required")
    .isIn(["host", "user"])
    .withMessage("Invalid User Type"),

  check("terms")
    .notEmpty()
    .withMessage("You must Accept the terms and conditions")
    .custom((value) => {
      if (value != true) {
        throw new Error("You must Accept the terms and conditions");
      }
      return true;
    }),
  async (req, res, next) => {
    try {
      console.log(req.body);
      let { firstname, lastname, email, password, role } = req.body;

      let errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          success: false,
          errorMessages: errors.array().map((error) => error.msg),
        });
      }

      let [existingUser] = await User.findOne(email);

      if (existingUser.length > 0) {
        return res.status(422).json({
          success: false,
          errorMessages: ["User Already Exists"],
        });
      }

      bcryptjs.hash(password, 12).then((hashPassword) => {
        let user = new User(firstname, lastname, email, hashPassword, role);
        user.adduser().then((result) => {
          console.log("User Added Successfully....");
          // ✅ ALWAYS return response
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
  },
];
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
  let isMatch = await bcryptjs.compare(password, user.password);
  if (isMatch) {
    let token = generateToken({
      id: user.id,
      name: user.firstname,
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
exports.getMe = async (req, res, next) => {
  res.json({
    user: req.user,
  });
};
