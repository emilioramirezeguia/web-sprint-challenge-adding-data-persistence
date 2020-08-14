const db = require("../data/db-config");

module.exports = {
  getResources,
  addResource,
};

// Select every resource
function getResources() {
  return db("*").from("resources");
}

// Insert resource
function addResource(resource) {
  return db("resources").insert(resource);
}
