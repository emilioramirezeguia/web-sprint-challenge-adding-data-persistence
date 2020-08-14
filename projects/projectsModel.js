const db = require("../data/db-config");

module.exports = {
  getProjects,
  addProject,
};

// Select every project and bring back all of its data
function getProjects() {
  return db.select("*").from("projects");
}

// Add a project and bring back the newly created project
function addProject(project) {
  return db("projects").insert(project);

  //   return db("projects")
  //     .insert(project)
  //     .then((projectIDS) => {
  //       if (projectIDS.length === 1) {
  //         return projectsIDS[0];
  //       } else if (projectIDS.length > 1) {
  //         return projectIDS;
  //       } else {
  //         return null;
  //       }
  //     });
}
