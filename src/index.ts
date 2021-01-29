import express, { Request, Response } from "express";
import axios from "axios";
import jss from "json-stringify-safe";

const app = express();

app.use("/", async (req: Request, res: Response) => {
  const data = await axios.get("https://api.wazirx.com/api/v2/tickers");

  const info = data.data;

  res.send(info);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
