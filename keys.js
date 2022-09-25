const fs = require("fs");

function readKeys() {
  var keys = fs.readFileSync("keys.json", "utf8");
  return keys;
}

function validateKey() {
  try {
    var obj = JSON.parse(readKeys());
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = validateKey;
