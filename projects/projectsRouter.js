const express = require("express");
const Projects = require("./projectsModel");

const router = express.Router();

// GET all projects
router.get("/", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Create (POST) a project
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

// Create (POST) a task for a project

module.exports = router;
