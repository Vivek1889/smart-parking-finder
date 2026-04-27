let Parking = require("../models/parkingModel");

exports.getDashboard = async (req, res, next) => {
  let [result] = await Parking.fetchOneParkingByUserId(req.user.id);
  res.json({
    data: result[0],
  });
};
exports.poststatus = async (req, res, next) => {
  let { parkingid, newstatus } = req.body;
  let [result] = await Parking.changeStatus(newstatus, parkingid);
};
