exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Data Persistence Sprint",
          description: "Sprint challenge for week 12 of Lambda School.",
          completed: false
        }
      ]);
    });
};
