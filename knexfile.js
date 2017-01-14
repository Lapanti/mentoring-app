module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mentoring-app-dev',
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/development'
    }
  }
};
