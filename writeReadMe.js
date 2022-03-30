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

questionFiles.forEach((filePath) => {
  console.log("writing");
  const readStream = fs.createReadStream("./leetcode/" + filePath);
  const rl = readLine.createInterface({ input: readStream });
  let time = 1;

  rl.on("line", (line) => {
    let text = line;
    if (time > 2) {
      return;
    }
    if (time === 2) {
      writeText += `[${text.replace(
        "// ",
        ""
      )}](https://github.com/yuki5803/skyle_leetcode/blob/master/leetcode/${filePath})  \n`;
    }
    time++;
  });
});

console.log("Done!!!");

fs.writeFileSync("./README.md", writeText);

// const writeReadMe = async (fileIndex = 0) => {
//   const filePath = questionFiles[fileIndex];
//   const readStream = fs.createReadStream("./leetcode/" + filePath);
//   const rl = readLine.createInterface({ input: readStream });
//   let time = 1;
//   let isCom = false;

//   rl.on("line", (line) => {
//     let text = line;
//     if (time > 2) {
//       return;
//     }
//     if (time === 2) {
//       fs.writeFileSync(
//         "./README.md",
//         `[${text.replace(
//           "// ",
//           ""
//         )}](https://github.com/yuki5803/skyle_leetcode/blob/master/leetcode/${filePath})  \n`
//       );
//     }
//     time++;
//   });
//   if (fileIndex < questionFiles.length - 1 && !isCom) {
//     writeReadMe(fileIndex + 1);
//   }
// };

// writeReadMe();
// new Promise((resolve, rejects) => {
//   resolve(writeReadMe());
// }).then((value) => {
//   console.log(value);
//   readMe.end("End");
// });

// questionFiles.forEach((filePath) => {
//   const readStream = fs.createReadStream("./leetcode/" + filePath);
//   const rl = readLine.createInterface({ input: readStream });
//   let time = 1;
//   rl.on("line", (line) => {
//     let text = line;
//     if (time > 2) {
//       return;
//     }
//     if (time === 2) {
//       readMe.write(
//         `[${text.replace(
//           "// ",
//           ""
//         )}](https://github.com/yuki5803/skyle_leetcode/blob/master/leetcode/${filePath})  \n`,
//         () => console.log(time, line)
//       );
//     }
//     time++;
//   });
// });
