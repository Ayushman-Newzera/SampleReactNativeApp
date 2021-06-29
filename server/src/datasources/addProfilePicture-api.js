const db = require("../db");

class AddProfilePictureAPI {
    addProfilePicture = (profileImageLink) => {
        const sqlUpdate = "UPDATE User SET profileImageLink = ? WHERE id = 1;";

        db.query(sqlUpdate, [profileImageLink], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("result", result);
            }
        });

        return profileImageLink;

    }
}

module.exports = AddProfilePictureAPI;