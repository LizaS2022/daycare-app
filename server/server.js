const express = require("express");
const models = require("./models");
const db = require("./config/connection");
const app = express();

const PORT = process.env.PORT || 3001;

db.once("open", () => {
  console.log("am i here?");
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
