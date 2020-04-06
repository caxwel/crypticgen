exports.up = function(knex) {
    return knex.schema.createTable("sentences", function(table) {
      table.increments("id");
      table.string("start").notNullable();
      table.string("subject").notNullable();
      table.string("verb").notNullable();
      table.string("adverb").notNullable();
      table.string("prep").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("sentences");
  };
  