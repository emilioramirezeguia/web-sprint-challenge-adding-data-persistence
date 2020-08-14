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

// GET project by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("Project ID: ", id);

  Projects.getProjectById(id)
    .then((project) => {
      res.status(200).json(project);
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

// GET tasks for a specific project
router.get("/:id/tasks", (req, res) => {
  const projectID = req.params.id;

  Projects.getProjectTasks(projectID)
    .then((projectTasks) => {
      res.status(200).json({ projectTasks });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Create (POST) a task for a project
router.post("/:id/tasks", (req, res) => {
  const task = req.body;
  const projectID = req.params.id;

  Projects.addProjectTask(projectID, task)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

// GET resources for a specific project
router.get("/:id/resources", (req, res) => {
  const projectID = req.params.id;

  Projects.getProjectResources(projectID)
    .then((projectResources) => {
      res.status(200).json({ projectResources });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
