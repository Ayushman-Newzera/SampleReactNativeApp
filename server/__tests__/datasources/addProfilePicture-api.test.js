const db = require("../../src/db");
const AddProfilePictureAPI = require("../../src/datasources/addProfilePicture-api");

describe("GetUserDetailsAPI", () => {
  it("Should update profile picture without an error", async function (done) {
    db.getConnection(async function (err, conn) {
      if (err) {
        done(err); // Mocha will report the error passed here.
        return;
      }

    //   console.log(AddProfilePictureAPI);

      // if you got a connection...
      await conn.query(
        "UPDATE User SET profileImageLink = ? WHERE id = 1;",
        ["Hi there!"],
        (err, result) => {
          if (err) {
            console.log(err);
          }
        //   console.log("result", result);

        }
      );

      conn.query("SELECT profileImageLink FROM User;", (err, result) => {
        if (err) {
          console.log(err);
        }

        expect(result).toHaveLength(1);

        conn.destroy();
      });

      done();
    });
  });
});
