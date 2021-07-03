const db = require("../db");

/** To store the result from the query */
var data = [];

/** SQL query */
const sqlSelect = "SELECT * FROM User;";

class GetUserDetailsAPI {
  /**
   * @returns the data acquired by performing the query
   */
  getUserDetails = async () => {
    /** Getting the connection and then performing the query*/
    db.getConnection(function (err, conn) {
      if (err) {
        return res.send(400);
      }

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
