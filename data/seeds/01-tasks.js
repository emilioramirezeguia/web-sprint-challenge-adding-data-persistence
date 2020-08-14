exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { id: 1, taskDescription: "Grab your ingredients", projectID: 1 },
        {
          id: 2,
          taskDescription: "Load your surfboard to your car",
          projectID: 2,
        },
        { id: 3, taskDescription: "Do some market research", projectID: 3 },
      ]);
    });
};
