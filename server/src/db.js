const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "SampleReactNativeApp",
  queueLimit: 5,
  connectionLimit : 5,
});

module.exports = db;
