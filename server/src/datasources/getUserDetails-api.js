const db = require("../db");

var data = [];

const sqlSelect = "SELECT * FROM User;";

class GetUserDetailsAPI {
  getUserDetails = async () => {
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
          console.log("result", result);
          data = result;
        }

        conn.destroy();
      });
    });
    
    await new Promise((resolve) => setTimeout(resolve, 100));
    return data[0];
  };
}

module.exports = GetUserDetailsAPI;
