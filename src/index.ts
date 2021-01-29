import express, { Request, Response } from "express";
import axios from "axios";
import jss from "json-stringify-safe";

const app = express();

app.use("/", async (req: Request, res: Response) => {
  const data = (await axios.get("https://api.wazirx.com/api/v2/tickers")).data;

  const keys = Object.keys(data);

  let array = [];
  console.log(data[keys[2]]);
  for (var i = 0; i < 10; i++) {
    var key = keys[i];
    array.push(data[key]);
  }

  res.send(array);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
