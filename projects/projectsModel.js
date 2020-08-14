const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  addTask,
};

// Select every project and bring back all of its data
function getProjects() {
  return db.select("*").from("projects");
}

// Select project by id
function getProjectById(id) {
  return db("projects").where({ id }).first();
}

// Add a project and bring back the newly created project
function addProject(project) {
  return db("projects").insert(project);
}

function addTask(projectID, task) {
  const newTask = {
    ...task,
    projectID: projectID,
  };
  return db("tasks").insert(newTask);
}
