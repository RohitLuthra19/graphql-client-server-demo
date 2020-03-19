const { ApolloServer, makeExecutableSchema } = require("apollo-server");
// const { makeExecutableSchema } = require("graphql-tools");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const { MONGO_DEFAULT_URI } = require("./config/constants");

const MONGO_URI = process.env.MONGO_URI
  ? process.env.MONGO_URI
  : MONGO_DEFAULT_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("db connected"))
  .catch(() => console.error("db connection failed"));

/**
 * Schema
 */
const typeDefs = require("./schema");

/**
 * Resolvers
 */
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`GraphQL server is running at : ${url}`);
});
