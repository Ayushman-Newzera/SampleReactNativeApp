// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const db = require('./db');

const resolvers = {
  /** Query for getting the user details */
  Query: {
    getUserDetails: (_, __, { dataSources }) => {
      return dataSources.getUserDetailsAPI.getUserDetails();
    },
  },

  /** Mutation for updating the profile picture of the user */
  Mutation: {
    addProfilePicture: async (_, { profileImageLink }, { dataSources }) => {
      
      const sqlSelect = "SELECT * FROM User;";

      db.query(sqlSelect, (err, result) => {
        console.log(result);
      });

      return dataSources.addProfilePictureAPI.addProfilePicture(profileImageLink);
    },
  },
};

module.exports = resolvers;
