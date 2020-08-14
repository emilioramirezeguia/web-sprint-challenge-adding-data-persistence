const express = require("express");
const Projects = require("./projectsModel");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
