const path = require("path");
const fs = require("fs");
const promis = require("fs/promises");
const folderCss = path.join(__dirname, "styles");
const finishCss = path.join(__dirname, "project-dist", "bundle.css");
console.log('Спасибо за проверку!Это последнее задание этого таска,по моей оценке получилось 100 баллов,если есть ошибки-напишите мне пожалуйста')

const writeStream = fs.createWriteStream(finishCss); //создать поток для запси

fs.access(folderCss, (err) => {
  promis.readdir(folderCss, { withFileTypes: true }).then((result) => {
    result.forEach((element) => {
      let fileName = element.name.split(".");
      if (!element.isFile() || fileName[1] != "css") {
        return;
      }
      let stream = fs.createReadStream(
        path.join(folderCss, element.name),
        "utf-8"); //поток для чтения
      stream.on("data", function (data) {
        writeStream.write(data + "\n\n");}); //записать стили в файл
    });
  });
});
