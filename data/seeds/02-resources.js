exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, resourceName: "Kitchen utensils" },
        { id: 2, resourceName: "Wetsuit" },
        { id: 3, resourceName: "Funding" },
      ]);
    });
};
