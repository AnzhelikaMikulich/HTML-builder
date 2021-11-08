const path = require("path");
const fs = require("fs");
const promis = require("fs/promises");
const folderName = path.join(__dirname, "files");
const folderNameCopy = path.join(__dirname, "files-copy"); //путь для проверки папки

async function addFolder() {
  await promis.rm(folderNameCopy, { recursive: true, force: true }); //delete folder
  await promis.mkdir(folderNameCopy, { recursive: true }); //add folder
}

async function copyFolder() {
  promis.readdir(folderName, { withFileTypes: true }).then((result) =>
    result.forEach((element) => {
      promis.copyFile(
        path.join(folderName, element.name),
        path.join(folderNameCopy, element.name)
      ); //copy files
    })
  );
}

async function runCopy() {
  await addFolder();
  await copyFolder();
}
runCopy();
