const express = require("express");
const Tasks = require("./tasksModel");

const router = express.Router();

// GET tasks
router.get("/", (req, res) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json({ tasks });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
