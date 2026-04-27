let mysql = require("mysql2");

let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "parking",
  // port: process.env.MYSQLPORT,
  // waitForConnections: true,
  // connectionLimit: 10,
});

module.exports = pool.promise();
