exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("id");
      table.string("projectName").notNullable();
      table.text("projectDescription");
      table.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("tasks", (table) => {
      table.increments("id");
      table.text("taskDescription").notNullable();
      table.text("taskNotes");
      table.boolean("completed").notNullable().defaultTo(false);
      table
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("restrict")
        .onUpdate("cascade");
    })
    .createTable("resources", (table) => {
      table.increments("id");
      table.string("resourceName").notNullable();
      table.text("resourceDescription");
    })
    .createTable("project_resources", (table) => {
      table.increments("id");
      table
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("restrict")
        .onUpdate("cascade");
      table
        .integer("resourceID")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("restrict")
        .onUpdate("cascade");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
