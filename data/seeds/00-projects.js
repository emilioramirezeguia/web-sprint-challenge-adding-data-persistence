exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, projectName: "Make breakfast" },
        { id: 2, projectName: "Go surf" },
        { id: 3, projectName: "Start a business" },
      ]);
    });
};
