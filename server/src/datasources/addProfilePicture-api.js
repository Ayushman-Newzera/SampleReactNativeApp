const db = require("../db");

class AddProfilePictureAPI {
  addProfilePicture = (profileImageLink) => {
    const sqlUpdate = "UPDATE User SET profileImageLink = ? WHERE id = 1;";

    db.getConnection(function (err, conn) {
      if (err) {
        return res.send(400);
      }

      // if you got a connection...
      conn.query(sqlUpdate, [profileImageLink], (err, result) => {
        if (err) {
          console.log(err);
          return res.send(400, "Could not get a connection");
        } else {
          console.log("result", result);
        }
        conn.release();
      });
    });

    return profileImageLink;
  };
}

module.exports = AddProfilePictureAPI;
