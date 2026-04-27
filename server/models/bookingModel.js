let db = require("../utils/database");

class Booking {
  constructor(userid, parkingid, vehicleno, vehicletype, bookingdate) {
    this.userid = userid;
    this.parkingid = parkingid;
    this.vehicleno = vehicleno;
    this.vehicletype = vehicletype;
    this.bookingdate = bookingdate;
  }

  addBooking() {
    return db.execute(
      "INSERT INTO bookings (userid, parkingid, vehicleno, vehicletype, bookingdate) VALUES (?, ?, ?, ?, ?)",
      [
        this.userid,
        this.parkingid,
        this.vehicleno,
        this.vehicletype,
        this.bookingdate,
      ],
    );
  }
  static fetchAllBookings(parkingid) {
    return db.execute(
      "SELECT u.firstname,b.bookingid,b.vehicleno,b.vehicletype,b.bookingdate,b.status FROM bookings b JOIN users u ON b.userid = u.id WHERE b.parkingid = ?",
      [parkingid],
    );
  }

  static fetchUserBooking(userid) {
    return db.execute("select * from bookings where userid=?", [userid]);
  }
  static deleteBooking(bookingid) {
    return db.execute("delete from bookings where bookingid=?", [bookingid]);
  }
}

module.exports = Booking;
