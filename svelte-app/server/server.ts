import express from "express";
import path from "path";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 5001;

// define a route handler for the default home page
app.get("/api", (req, res) => {
  res.send("Hello world!");
});

app.use(express.static(path.join(__dirname, "public"), { fallthrough: false }));

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
