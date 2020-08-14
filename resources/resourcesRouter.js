const express = require("express");
const Resources = require("./resourcesModel");

const router = express.Router();

// GET all resources
router.get("/", (req, res) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json({ resources });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Create (POST) a new resource
router.post("/", (req, res) => {
  const resource = req.body;
  console.log("Resource: ", resource);

  Resources.addResource(resource)
    .then((resourceIDS) => {
      res.status(201).json({ createdResources: resourceIDS });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
