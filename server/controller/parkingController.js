let Parking = require("../models/parkingModel");
let { check, validationResult } = require("express-validator");

exports.postAddParking = [
  check("name")
    .notEmpty()
    .withMessage("Parking Name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Parking Name contains atleast 2 Characters"),

  check("imageurl")
    .notEmpty()
    .withMessage("imageurl Url is required")
    .trim()
    .isLength({ min: 5 })
    .withMessage("imageurl url contains atleast 5 Characters"),

  async (req, res, next) => {
    try {
      let {
        name,
        imageurl,
        latitude,
        longitude,
        totalslots,
        price,
        openingtime,
        closingtime,
        parkingtype,
        cctv,
        security,
        charging,
        covered,
        address,
      } = req.body;

      if (!name || !latitude || !longitude || !totalslots || !price) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      let parking = new Parking(
        req.user.id,
        name,
        imageurl,
        latitude,
        longitude,
        totalslots,
        totalslots,
        price,
        openingtime,
        closingtime,
        parkingtype,
        cctv,
        security,
        charging,
        covered,
        address,
      );
      await parking.addParking();
      return res.status(201).json({
        success: true,
        message: "Parking Added Successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
];

exports.getAllParkings = async (req, res, next) => {
  let [result] = await Parking.fetchAllParkings();
  res.status(200).json({
    success: true,
    data: result,
  });
};
exports.editParking = async (req, res) => {
  const { name, totalslots, price, openingtime, closingtime, parkingid } =
    req.body;

  try {
    const [result] = await Parking.editParking(
      name,
      Number(totalslots),
      Number(price),
      openingtime,
      closingtime,
      parkingid,
    );

    // ✅ check if record updated
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Parking not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Parking Edit Successful",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
