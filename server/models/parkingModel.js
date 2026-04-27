let db = require("../utils/database");
class Parking {
  constructor(
    userid,
    name,
    imageurl,
    latitude,
    longitude,
    totalSlots,
    availableSlots,
    price,
    openingtime,
    closingtime,
    parkingtype,
    cctv,
    security,
    charging,
    covered,
    address,
  ) {
    ((this.userid = userid),
      (this.name = name),
      (this.imageurl = imageurl),
      (this.latitude = latitude),
      (this.longitude = longitude),
      (this.totalSlots = totalSlots),
      (this.availableSlots = availableSlots),
      (this.price = price),
      (this.openingtime = openingtime),
      (this.closingtime = closingtime),
      (this.parkingtype = parkingtype),
      (this.cctv = cctv),
      (this.security = security),
      (this.charging = charging),
      (this.covered = covered),
      (this.address = address));
  }
  addParking() {
    return db.execute(
      "insert into parkings (userid, name,imageurl,latitude,longitude,totalSlots,availableSlots,price,openingtime,closingtime,parkingtype,cctv,security,charging,covered,address) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        this.userid,
        this.name,
        this.imageurl,
        this.latitude,
        this.longitude,
        this.totalSlots,
        this.availableSlots,
        this.price,
        this.openingtime,
        this.closingtime,
        this.parkingtype,
        this.cctv,
        this.security,
        this.charging,
        this.covered,
        this.address,
      ],
    );
  }
  static fetchAllParkings() {
    return db.execute(
      "Select parkingid,name,imageurl,latitude,longitude,totalslots,availableslots,price,openingtime,closingtime,parkingtype,cctv,charging,security,covered,status,address from parkings",
    );
  }
  static fetchOneParking(parkingid) {
    return db.execute("Select * from parkings where parkingid=?", [parkingid]);
  }
  static fetchOneParkingByUserId(userid) {
    return db.execute("Select * from parkings where userid=?", [userid]);
  }
  static changeStatus(newStatus, parkingid) {
    return db.execute("UPDATE parkings SET status = ? WHERE parkingid = ?", [
      newStatus,
      parkingid,
    ]);
  }
  static decreaseAvailableSlots(parkingid) {
    return db.execute(
      "UPDATE parkings SET availableSlots = availableSlots - 1 WHERE parkingid = ? AND availableSlots > 0",
      [parkingid],
    );
  }
  static increaseAvailableSlots(parkingid) {
    return db.execute(
      "UPDATE parkings SET availableSlots = availableSlots + 1 WHERE parkingid = ? AND availableSlots > 0",
      [parkingid],
    );
  }

  static editParking(
    name,
    totalslots,
    price,
    openingtime,
    closingtime,
    parkingid,
  ) {
    return db.execute(
      "  UPDATE parkings SET  name = ?, totalslots = ?, price = ?, openingtime = ?, closingtime = ? WHERE parkingid = ?",
      [name, totalslots, price, openingtime, closingtime, parkingid],
    );
  }
}
module.exports = Parking;
