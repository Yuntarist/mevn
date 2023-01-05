const express = require("express");
const path = require("path");
const logger = require("morgan");
const fs = require("fs");

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

app.post("/info", function (req, res) {
  let name = req.body.name;
  let age = req.body.age;
  let tt = new Date();

  fs.appendFile(_path + name + ".txt", age + "\t (" + tt + ") \n", (e) => {
    // 덮어쓰고 그 내용을 내 마음대로 할 수 있다.
    if (e) throw e;
    res.send(
      `<script>alert("${name}.txt 파일 저장완료!");history.go(-1)</script>`
    );
  });
});

app.get("/list", (req, res) => {
  fs.readFile(_path + "111.txt", "utf-8", (err, data) => {
    // 파일이 없으면 생성하고 내용추가, 있으면 그냥 추가
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(PORT + " 서버 동작 완료.");
});
