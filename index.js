const express = require("express");
const format = require("date-format");
const app = express();
const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(223).send("Hello NAMAN!!");
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "Naman Gupta",
    followers: 361,
    follows: 416,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json([instaSocial]);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "Gupta",
    followers: 361,
    follows: 416,
    date: Date.now(),
  };
  res.status(200).json([instaSocial]);
});
app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "Naman",
    followers: 361,
    follows: 416,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json([instaSocial]);
});
app.listen(PORT, () => {
  console.log("Server is running!! ${PORT} ", PORT);
});
