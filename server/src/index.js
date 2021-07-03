const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const GetUserDetailsAPI = require('./datasources/getUserDetails-api');
const AddProfilePictureAPI = require('./datasources/addProfilePicture-api');

/**
 * The ApolloServer constructor requires two parameters: 
 * your schema definition and your set of resolvers.
 */
const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources: () => {
        return {
            getUserDetailsAPI: new GetUserDetailsAPI(),
            addProfilePictureAPI: new AddProfilePictureAPI(),
        }
    } 
});

/** The `listen` method launches a web server. */ 
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
