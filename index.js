const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  return res.send("<h1>Hello</h1>");
});

app.listen(8100, (req, res) => {
  console.log("Server is running");
});
