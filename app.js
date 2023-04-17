const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Good job, Chris!");
});

app.get("/foo", (req, res) => {
  res.set("X-Foo", "bar");
  res.status(418);
  res.send("I prefer coffee");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
