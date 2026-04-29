let db = require("../utils/database");
class User {
  constructor(firstname, lastname, email, password, gender) {
    ((this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.password = password),
      (this.gender = gender));
  }

  adduser() {
    return db.execute(
      "insert into users (firstname,lastname,email,password,gender) values(?,?,?,?,?)",
      [this.firstname, this.lastname, this.email, this.password, this.gender],
    );
  }
  static findOne(email) {
    return db.execute("select * from users where email=?", [email]);
  }
  static updateRole(id) {
    return db.execute("UPDATE users SET role = ? WHERE id = ?", ["host", id]);
  }
}
module.exports = User;
