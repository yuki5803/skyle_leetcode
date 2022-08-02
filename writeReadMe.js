const fs = require("fs");
const { once } = require("events");
const readLine = require("readline");

const allFiles = fs.readdirSync("./leetcode/");

// const readMe = fs.createWriteStream("./README.md", {
//   flags: "w",
// });

const questionFiles = allFiles
  .filter((file) => {
    return file.match(/^Question_[0-9]+_(Easy|Medium|Hard).js$/);
  })
  .sort((file1, file2) => {
    return Number(file1.match(/\d+/)) - Number(file2.match(/\d+/));
  });

let writeText = "";

new Promise((resolve) => {
  let time = 1
  questionFiles.forEach((filePath) => {
    const title = fs.readFileSync("./leetcode/" + filePath, 'utf-8').split(/\r?\n/)[1]
    writeText += `[${title.replace(
      "// ",
      ""
    )}](https://github.com/yuki5803/skyle_leetcode/blob/master/leetcode/${filePath})  \n`
  });
  resolve()
}).then(() => {
  fs.writeFileSync("./README.md", writeText);
  console.log("Done!!!");
  console.log(writeText);
});
