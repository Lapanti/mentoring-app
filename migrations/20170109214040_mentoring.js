
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('agreement', function(table) {
      table.increments('id').primary();
      table.string('your_name').notNull();
      table.string('your_email').notNull();
      table.string('mentor_name').notNull();
      table.string('mentor_email').notNull();
      table.boolean('career_coaching').notNull();
      table.boolean('support_skill').notNull();
      table.string('skill_name').nullable();
      table.boolean('checkpoint_goals').notNull();
      table.boolean('continuous_sparring').notNull();
      table.enu('how_long', ['3 months', '6 months', 'Custom']).notNull();
      table.string('how_long_custom').nullable();
      table.enu('how', ['Meetings', 'Discussions', 'Lunches', 'Custom']).notNull();
      table.string('how_custom').nullable();
      table.enu('how_often', ['Weekly', 'Bi-weekly', 'Monthly', 'Custom']).notNull();
      table.string('how_often_custom').nullable();
      table.boolean('retro').notNull();
      table.boolean('retro_supervisor').nullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('agreement');
};
