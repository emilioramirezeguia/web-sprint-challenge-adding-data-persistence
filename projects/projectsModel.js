const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  getProjectTasks,
  addProjectTask,
  getProjectResources,
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

// Select a task for a project
function getProjectTasks(projectID) {
  return db("tasks").where({ id: projectID });
}

// Add tasks to a project
function addProjectTask(projectID, task) {
  const newTask = {
    ...task,
    projectID: projectID,
  };
  return db("tasks").insert(newTask);
}

// Select every resource for a project
function getProjectResources(projectID) {
  return db("project_resources as pr")
    .join("projects", "pr.projectID", "projects.id")
    .join("resources", "pr.resourceID", "resources.id")
    .select("pr.id", "projects.projectName", "resources.resourceName")
    .where({ "projects.id": projectID });
}
