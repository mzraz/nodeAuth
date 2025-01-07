const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/connectDB");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL;
app.use(cors());

connectDB(DATABASE_URL);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
