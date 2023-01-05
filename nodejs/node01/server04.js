const express = require("express");
const path = require("path");
const logger = require("morgan");

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
  let id = req.body.iid;
  let passwd = req.body.ipw;
  let data = req.body.idata;

  console.log(id, passwd, data);

  res.send("확인되었습니다.");
});

app.listen(PORT, () => {
  console.log(PORT + " 서버 동작 완료.");
});
