"use strict";
var knex = require("knex");
var config = require("../../knexfile.js");
var kn = knex(config.development);
exports.__esModule = true;
exports["default"] = kn;
kn.migrate.latest([config]);
