let db = require("../utils/database");
class User {
  constructor(firstname, lastname, email, password, role) {
    ((this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.password = password),
      (this.role = role));
  }

  adduser() {
    return db.execute(
      "insert into users (firstname,lastname,email,password,role) values(?,?,?,?,?)",
      [this.firstname, this.lastname, this.email, this.password, this.role],
    );
  }
  static findOne(email) {
    return db.execute("select * from users where email=?", [email]);
  }
}
module.exports = User;
