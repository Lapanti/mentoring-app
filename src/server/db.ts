import * as knex from 'knex';
import * as config from '../../knexfile.js';

const kn = knex(config.development);

export default kn;

kn.migrate.latest([config]);
