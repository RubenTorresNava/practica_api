import express from "express";
import session from "express-session";

const app = express();

app.get("/", (req, res) => {
  res.send("Wea forme jalando");
});

app.listen(3000, () => {
  console.log("Up");
});
