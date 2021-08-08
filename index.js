const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");

router.get("/", (req, res) => {
  console.log("prout");
});

app.use(router);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend")));

app.listen(4000, () => {
  console.log("starting server");
});
