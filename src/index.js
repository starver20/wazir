const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

// app.use(express.static(path.join(__dirname, "public")));

app.use("/", async (req, res) => {
  const data = (await axios.get("https://api.wazirx.com/api/v2/tickers")).data;

  const keys = Object.keys(data);

  let array = [];
  let reqKeys = [];
  for (var i = 0; i < 10; i++) {
    var key = keys[i];
    reqKeys.push(key);
    array.push(data[key]);
  }

  console.log(data);
  res.render("home", {
    data: data,
    keys: reqKeys,
  });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
