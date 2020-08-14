const db = require("../data/db-config");

module.exports = {
  getResources,
};

// Select every resource
function getResources() {
  return db("*").from("resources");
}
