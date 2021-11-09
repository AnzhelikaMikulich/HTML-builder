const path = require("path");
const fs = require("fs");
const promis = require("fs/promises");
const folderName = path.join(__dirname, "files");
const folderNameCopy = path.join(__dirname, "files-copy"); //путь для проверки папки

fs.access(folderNameCopy, (err) => {
  if (err) {
    promis.mkdir(folderNameCopy, { recursive: true }); //создать папку если ее нет
    promis.readdir(folderName, { withFileTypes: true }).then((result) =>
      result.forEach((element) => {
        promis.copyFile(
          path.join(folderName, element.name),
          path.join(folderNameCopy, element.name)
        ); //скопировать файлы
      })
    );
  } else {
    promis
      .rm(folderNameCopy, { recursive: true })//удалить старую папку
      .then((res) =>
        promis.mkdir(folderNameCopy, { recursive: true, force: true })//создать новую
      )
      .then((promis) => console.log(2))
      .then((result) =>
        promis.readdir(folderName, { withFileTypes: true }).then((result) =>
          // console.log(result)
          result.forEach((element) => {
            promis.copyFile(//скопировать файлы
              path.join(folderName, element.name),
              path.join(folderNameCopy, element.name)
            );
          })
        )
      );
  }
});
