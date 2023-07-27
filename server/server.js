const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { Server } = require("http");
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3001;

const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  db.once("open", () => {
    console.log("am i here?");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  });
};

startApolloServer();
