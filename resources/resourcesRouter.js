const express = require("express");
const Resources = require("./resourcesModel");

const router = express.Router();

// GET all projects
router.get("/", (req, res) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json({ resources });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
