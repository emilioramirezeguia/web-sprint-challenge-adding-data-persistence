exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project_resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("project_resources").insert([
        { id: 1, projectID: 1, resourceID: 1 },
        { id: 2, projectID: 2, resourceID: 2 },
        { id: 3, projectID: 3, resourceID: 3 },
      ]);
    });
};
