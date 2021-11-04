const fs = require("fs");

const path = require('path');

let stream = fs.createReadStream('./01-read-file/text.txt')

stream.on("data", function(data) {
  let chunk = data.toString();
  console.log(chunk);
}); 