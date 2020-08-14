const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working... it's working!" });
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
