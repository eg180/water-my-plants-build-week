
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments();
      tbl.string("username", 255).unique().notNullable();
      tbl.integer("email", 255).unique().notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  
};
