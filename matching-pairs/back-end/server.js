const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const port = process.env.port || 6000;
app.listen(port, () => {
  console.log(`Server listeing on port ${port}!`);
});
