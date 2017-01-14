"use strict";
var db_1 = require("./db");
var knex = db_1["default"]('agreement');
function getById(id) {
    return knex.select().where({ id: id });
}
exports.getById = getById;
