const fs = require("fs");
const express = require("express");
const app = express();
const port = 3434;

app.get("/", (req, res) => {
  res.send(readKeys());
});

function readKeys() {
  var keys = fs.readFileSync("keys.json", "utf8");
  return keys;
}

app.listen(port, () => {
  ;
});
