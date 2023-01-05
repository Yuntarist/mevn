// 쿼리스트링
const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();
const PORT = 3001;
const _path = path.join(__dirname, "/dist");
console.log(_path);

app.use("/", express.static(_path));
app.use(logger("tiny"));

app.get("/test", function (req, res) {
  res.send(req.query.id + " 그리고 " + req.query.name);
});

app.listen(PORT, () => {
  console.log(PORT + " 서버 동작 완료.");
});
