const { ApolloServer, gql } = require("apollo-server");

/**
 * A schema is a collection of type definitions (hence "typeDefs") 
 * that together define the "shape" of queries that are executed against your data.
 */
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: Int!
    name: String!
    bio: String!
    profileImageLink: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.

  type Query {
    getUserDetails: User!
  }

  type Mutation {
    addProfilePicture(profileImageLink: String): String
  }
`;

module.exports = typeDefs;
