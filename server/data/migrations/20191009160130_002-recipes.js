exports.up = function(knex) {
  return knex.schema.createTable("recipes", table => {
    table.increments();
    table
      .string("name", 64)
      .notNullable()
      .unique();
    table.string("ingredients", 512).notNullable();
    table.string("directions", 1024);
    table.string("tags", 128);
    table.string("pictureURL", 512);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("owner", 128).notNullable();
    table.string("sourceURL", 512);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
