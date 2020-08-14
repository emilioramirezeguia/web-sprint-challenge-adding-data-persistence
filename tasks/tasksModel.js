const db = require("../data/db-config");

module.exports = {
  getTasks,
};

// Select every task and include project name and description
function getTasks() {
  return db("tasks")
    .join("projects", "tasks.projectID", "projects.id")
    .select(
      "tasks.id",
      "projects.projectName",
      "projects.projectDescription",
      "tasks.taskDescription",
      "tasks.taskNotes",
      "tasks.completed"
    );
}
