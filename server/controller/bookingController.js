let Booking = require("../models/bookingModel");
let Parking = require("../models/parkingModel");

exports.postBooking = async (req, res, next) => {
  let { parkingid, vehicleno, date, vehicletype } = req.body;

  let booking = new Booking(
    req.user.id,
    parkingid,
    vehicleno,
    vehicletype,
    date,
  );

  let [row] = await Booking.fetchUserBooking(req.user.id);

  if (row.length > 0) {
    return res.json({
      success: false,
      msg: "you Cannoot book More then 1 Parking",
    });
  }

  let [park] = await Parking.fetchOneParking(parkingid);

  if (park.length === 0 || park[0].availableslots <= 0) {
    return res.json({
      success: false,
      msg: "Slots Not Available",
    });
  }

  await Parking.decreaseAvailableSlots(parkingid);
  await booking.addBooking();
  return res.json({
    success: true,
    msg: "BookingSuccessfull",
  });
};

exports.fetchUserBooking = async (req, res, next) => {
  let [bookingRow] = await Booking.fetchUserBooking(req.user.id);

  if (bookingRow.length > 0) {
    let booking = bookingRow[0];

    let [parkingRow] = await Parking.fetchOneParking(booking.parkingid);

    if (parkingRow.length === 0) {
      return res.json({
        success: false,
        message: "Parking not found",
      });
    }

    let parking = parkingRow[0];

    let data = {
      bookingid: booking.bookingid,
      name: parking.name,
      parkingid: parking.parkingid,
      latitude: parking.latitude,
      longitude: parking.longitude,
      address: parking.address,
      price: parking.price,
      cctv: parking.cctv,
      security: parking.security,
      charging: parking.charging,
      vehicleno: booking.vehicleno,
      vehicletype: booking.vehicletype,
      date: booking.bookingdate,
      status: booking.status,
    };

    return res.json({
      success: true,
      data: data,
    });
  }

  return res.json({
    success: false,
    message: "No Booking Found",
  });
};

exports.cancelBooking = async (req, res, next) => {
  let { bookingid, parkingid } = req.body;

  await Booking.deleteBooking(bookingid);
  await Parking.increaseAvailableSlots(parkingid);

  return res.status(200).json({
    success: true,
    message: "Cancel Booking SuccessFull",
  });
};
exports.fetchAllBookings = async (req, res, next) => {
  let { parkingid } = req.params;
  let [result] = await Booking.fetchAllBookings(parkingid);
  res.status(200).json({
    success: true,
    data: result,
  });
};
