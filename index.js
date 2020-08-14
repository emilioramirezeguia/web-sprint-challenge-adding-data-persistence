const express = require("express");
const projectsRouter = require("./projects/projectsRouter");

const server = express();

server.get("/api", (req, res) => {
  res.status(200).json({ message: "It's working... it's working!" });
});

server.use("/api/projects", projectsRouter);

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
