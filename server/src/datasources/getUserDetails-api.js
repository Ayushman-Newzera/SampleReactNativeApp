const db = require("../db");

var data = [];

const sqlSelect = "SELECT * FROM User;";

db.getConnection(function (err, conn) {
  if (err) {
    return res.send(400);
  }

  // if you got a connection...
  conn.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      return res.send(400, "Could not get a connection");
    } else {
      data = result;
    }

    conn.release();
  });
});

class GetUserDetailsAPI {
  getUserDetails = () => {
    return data[0];
  };
}

module.exports = GetUserDetailsAPI;
