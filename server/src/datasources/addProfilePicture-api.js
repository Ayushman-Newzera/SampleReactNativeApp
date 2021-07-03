const db = require("../db");

class AddProfilePictureAPI {
  /**
   * 
   * @param {profileImageLink} profileImageLink the new profile image which is to be set on the screen
   * @returns the same profileImageLink
   */
  addProfilePicture = (profileImageLink) => {
    /** SQL query */
    const sqlUpdate = "UPDATE User SET profileImageLink = ? WHERE id = 1;";

    /** Getting the connection and performing the query */
    db.getConnection(function (err, conn) {
      if (err) {
        return res.send(400);
      }

      conn.query(sqlUpdate, [profileImageLink], (err, result) => {
        if (err) {
          console.log(err);
          return res.send(400, "Could not get a connection");
        } else {
          console.log("result", result);
        }
        conn.destroy();
      });
    });

    return profileImageLink;
  };
}

module.exports = AddProfilePictureAPI;
