const express = require("express");
const Projects = require("./projectsModel");

const router = express.Router();

// GET projects
router.get("/", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Create (POST) project
router.post("/", (req, res) => {
  const project = req.body;

  Projects.addProject(project)
    .then((projects) => {
      res.status(201).json({ createdProjects: projects });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
