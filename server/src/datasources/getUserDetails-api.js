const db = require("../db");

var data = [];

const sqlSelect = "SELECT * FROM User;";

db.query(sqlSelect, (err, result) => {
  data = result;
});

class GetUserDetailsAPI {
  getUserDetails = () => {
    return data[0];
  };
}

module.exports = GetUserDetailsAPI;
