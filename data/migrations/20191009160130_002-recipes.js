exports.up = function(knex) {
  return knex.schema.createTable("recipes", table => {
    table.increments();
    table
      .string("name", 64)
      .notNullable()
      .unique();
    table.string("ingredients", 512).notNullable();
    table.string("directions", 512);
    table.string("tags", 128);
    table.string("pictureURL", 128);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
