const pgp = require('pg-promise')();

// Name of database
const opts = process.env.DATABASE_URL || {
  database: 'errunds_db'
};

// Establish connection to DB with pg-promise
const db = pgp(opts);

module.exports = {
  pgp,
  db
};

