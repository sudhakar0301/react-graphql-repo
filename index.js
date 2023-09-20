const { ApolloServer, gql } = require("apollo-server");

const { MONGODB } = require("./config");
const mongoose = require("mongoose");
const post = require("./models/post");
const user = require("./models/user");

const typeDefs = gql`
  type Post {
    username: String!
    body: String!
    id: ID!
    createdAt: String
  }
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    gender: String!
  }
  type Query {
    getPosts: [Post]
    getUsers: [User]
  }
`;

const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        return await post.find();
      } catch (error) {
        throw new Error(error);
      }
    },
    getUsers: async () => {
      try {
        return await user.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("connnected to database");
    return server.listen({ port: 5000 });
  })
  .then(({ url }) => {
    console.log("Server is listening on " + url);
  });
