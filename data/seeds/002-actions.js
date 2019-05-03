exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "Create routes.",
          notes: "Create routes for projects and actions.",
          completed: false
        },
        {
          project_id: 1,
          description: "Create migrations.",
          notes: "Create a table for projects and actions.",
          completed: false
        }
      ]);
    });
};
