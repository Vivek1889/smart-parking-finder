let Parking = require("../models/parkingModel");
let User = require("../models/userModel");
exports.postAddParking = [
  async (req, res, next) => {
    try {
      let {
        parkingname,
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

      console.log(req.body);
      if (!parkingname || !latitude || !longitude || !totalslots || !price) {
        console.log("lkjljn");
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      let parking = new Parking(
        req.user.id,
        parkingname,
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
      await User.updateRole(req.user.id);
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
