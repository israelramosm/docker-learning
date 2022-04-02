import express from "express";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Project BE 01");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
