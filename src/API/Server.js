const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const port = 4000;

let data = [{ text: "안녕하세요" }];

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "..", "public", "/index.html"));
});

app.get("/about", (req, res) => {
  console.log("데이터 요청");
  return res.json(data);
});

app.post("/about", (req, res) => {
  console.log("데이터 추가 요청");
  try {
    data.push(req.body);
  } catch (e) {
    console.log(e);
  }

  return res.json(data);
});

app.post("/about/delete", (req, res) => {
  console.log("데이터 삭제 요청");
  if (data.findIndex((value) => value.text === req.body.text) !== -1) {
    data.splice(
      data.findIndex((value) => value.text === req.body.text),
      1
    );
    return res.json(data);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port : ${port}`);
});

// app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use(express.static(path.join(__dirname, "..", "..", "src")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "..", "public", "/index.html"));
});
