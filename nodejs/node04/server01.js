const express = require("express");
const path = require("path");
const logger = require("morgan");
const multer = require("multer");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const _path = path.join(__dirname, "/");
console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, _path);
  },
  filename: (req, res, cb) => {
    let fix = Buffer.from(res.originalname, "latin1").toString("utf-8"); // 한글깨짐 방지용
    cb(null, fix);
  },
});

// // Using fs.exists() method
// fs.exists('/etc/passwd',(exists) => { // fs.exists를 사용할 수 없음
// 	console.log(exists ? 'Found' : 'Not Found!');
// });

let upload = multer({ storage: storage });

app.post("/up", upload.single("ufile"), (req, res) => {
  console.log(req.file);
  res.send(
    `<script>alert("파일 업로드 완료!");location.replace('index.html')</script>`
  );
});

app.listen(PORT, () => {
  console.log(PORT + " 서버 동작 완료.");
});
