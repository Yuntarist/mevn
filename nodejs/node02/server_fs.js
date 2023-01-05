const express = require("express");
const path = require("path");
const logger = require("morgan");
const fs = require("fs"); // file system 의 약자 내장모듈로 따로 설치 안해도 됨
const e = require("express");

const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// CRUD
const file = "test1";
const data = "와 node.js로 작성했다!";
fs.writeFile(_path + file + ".txt", data, (e) => {
  if (e) console.log(e);
  console.log("파일이 작성완료 되었습니다.");
});

app.listen(PORT, () => {
  console.log(PORT + " 서버 동작 완료.");
});
