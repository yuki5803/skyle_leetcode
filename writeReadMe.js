const fs = require("fs");
const readLine = require("readline");

const allFiles = fs.readdirSync("./leetcode/");

const readMe = fs.createWriteStream("./README.md", {
  flags: "w",
});

const questionFiles = allFiles
  .filter((file) => {
    return file.match(/^Question_[0-9]+_(Easy|Medium|Hard).js$/);
  })
  .sort((file1, file2) => {
    return file1.match(/\d+/) - file2.match(/\d+/);
  });

questionFiles.forEach((filePath) => {
  const readStream = fs.createReadStream("./leetcode/" + filePath);
  const rl = readLine.createInterface({ input: readStream });
  let time = 1;
  rl.on("line", (line) => {
    let text = line;
    if (time > 2) {
      return;
    }
    if (time === 2) {
      readMe.write(
        `[${text.replace(
          "// ",
          ""
        )}](https://github.com/yuki5803/skyle_leetcode/blob/master/leetcode/${filePath})\n`
      );
    }
    time++;
  });
});
