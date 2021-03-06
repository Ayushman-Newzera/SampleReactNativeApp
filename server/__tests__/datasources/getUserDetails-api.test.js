const db = require("../../src/db");
const GetUserDetailsAPI = require("../../src/datasources/getUserDetails-api");

describe("GetUserDetailsAPI", () => {
  it("Should get user details without an error", function (done) {
    db.getConnection(function (err, conn) {
      if (err) {
        done(err); // Mocha will report the error passed here.
        return;
      }

      // if you got a connection...
      conn.query("SELECT * FROM User;", (err, result) => {
        if (err) {
          console.log(err);
        }
        
        expect(JSON.stringify(result)).toBe("[{\"id\":1,\"name\":\"Byoung ho\",\"bio\":\"Photographer\",\"profileImageLink\":\"Hi there!\"}]");

        conn.destroy();
      });

      done();
    });
  });
});
