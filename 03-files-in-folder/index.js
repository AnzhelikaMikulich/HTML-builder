const path = require("path");
const fs = require("fs");
const promis = require("fs/promises");
const folderName = path.join(__dirname, "secret-folder");

promis.readdir(folderName, { withFileTypes: true }).then((result) =>
  result.forEach((element) => {
    fs.stat(path.join(folderName, element.name), (err, stats) => {
      if (err) console.log("Error");
      if (stats.isFile()) {
        let fileName = element.name.split(".");
        let fileWeight = stats.size / 1024; //kB
        console.log(`${fileName[0]}-${fileName[1]}-${fileWeight.toFixed(2)}kB`);
      } else {
        return;
      }
    });
  })
);
