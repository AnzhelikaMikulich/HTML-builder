const path = require("path");
const fs = require("fs");
const process = require("process");
const readline = require("readline");

const filePath = path.join(__dirname, "test.txt"); //create file 'test.txt'
let stream = fs.createWriteStream(filePath); //watch create file
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); //dialog

rl.write(`Hello!Add text, please(to exit press Ctrl + C or "exit")\n`);//takes a string as an argument and prints it to the console.

rl.addListener("line", (sdin) => {//'line' event is emitted whenever the input stream receives an end-of-line input
  if (sdin === "exit") {
    rl.write("Bye bye! Good luck learning Node.js!");
    process.exit(0);
  }
  stream.write(sdin + "\n");
});

rl.addListener("close", () => {//method closes the InterfaceConstructor instance and relinquishes control over the input and output streams
  rl.write("Bye bye! Good luck learning Node.js!");
  process.exit(0);
});
